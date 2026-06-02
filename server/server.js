require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const axios = require('axios');
const cloudinary = require('cloudinary').v2;
const FormData = require('form-data');
const { addTextToImage } = require('./services/thumbnailService'); // Import your new service

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

const thumbnailSchema = new mongoose.Schema({
    title: String,
    user_prompt: String,
    image_url: String,
    style: String,
    aspect_ratio: String,
    color_scheme: String,
    createdAt: { type: Date, default: Date.now }
});
const Thumbnail = mongoose.model('Thumbnail', thumbnailSchema);

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("DB Connected"))
    .catch((err) => console.error("DB Connection Error:", err));

// --- GENERATE THUMBNAIL PIPELINE ---
app.post('/api/thumbnail/generate', async (req, res) => {
    const { title, prompt, style, aspect_ratio, color_scheme } = req.body;
    
    try {
        const formData = new FormData();
        // Use a "clean" prompt to let the AI focus on background quality
        formData.append('prompt', `${style} style background, high quality, cinematic lighting. Colors: ${color_scheme}. No text.`);
        formData.append('output_format', 'jpeg');
        formData.append('aspect_ratio', aspect_ratio || '16:9');

        const response = await axios.post(
            'https://api.stability.ai/v2beta/stable-image/generate/sd3',
            formData,
            { 
                headers: { ...formData.getHeaders(), Authorization: `Bearer ${process.env.STABILITY_API_KEY}`, Accept: 'image/*' },
                responseType: 'arraybuffer' 
            }
        );

        // 1. Process: Apply Text Overlay using Sharp service
        const finalImageBuffer = await addTextToImage(response.data, title);

        // 2. Upload: Use the processed buffer for Cloudinary
        const upload = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream({ resource_type: "image" }, (error, result) => {
                if (error) reject(error);
                resolve(result);
            }).end(finalImageBuffer);
        });

        const newThumbnail = await Thumbnail.create({
            title, user_prompt: prompt, image_url: upload.secure_url, style, aspect_ratio, color_scheme
        });

        res.status(201).json({ thumbnail: newThumbnail });
    } catch (error) {
        console.error("Pipeline Error:", error.response?.data?.toString() || error.message);
        res.status(500).json({ message: "Image generation or processing failed." });
    }
});

// ... (Keep your existing GET, DELETE, and Auth routes here)

app.listen(3001, () => console.log('Backend server running on http://localhost:3001'));