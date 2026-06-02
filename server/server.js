require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const axios = require('axios');
const cloudinary = require('cloudinary').v2;
const FormData = require('form-data');
const { addTextToImage } = require('./services/thumbnailService');

// --- CONFIGURATION ---
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

// --- DATABASE MODEL ---
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

// --- 1. GENERATE THUMBNAIL (Stability AI + Sharp Composition) ---
app.post('/api/thumbnail/generate', async (req, res) => {
    const { title, prompt, style, aspect_ratio, color_scheme } = req.body;
    
    try {
        const formData = new FormData();
        formData.append('prompt', `${style} style background for YouTube thumbnail, cinematic lighting, vivid colors. Prompt: ${prompt}. Colors: ${color_scheme}. IMPORTANT: No text, no letters, clean background.`);
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

        // Apply Text Overlay via Service
        const finalImageBuffer = await addTextToImage(response.data, title);

        // Upload processed buffer to Cloudinary
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

// --- 2. FETCH SINGLE THUMBNAIL ---
app.get('/api/user/thumbnail/:id', async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid ID format" });
        }
        const thumbnail = await Thumbnail.findById(req.params.id);
        if (!thumbnail) return res.status(404).json({ message: "Thumbnail not found" });
        res.json({ thumbnail });
    } catch (error) {
        res.status(500).json({ message: "Error fetching thumbnail" });
    }
});

// --- 3. FETCH ALL THUMBNAILS ---
app.get('/api/user/thumbnails', async (req, res) => {
    try {
        const thumbnails = await Thumbnail.find().sort({ createdAt: -1 });
        res.json({ thumbnails });
    } catch (error) {
        res.status(500).json({ message: "Error fetching thumbnails" });
    }
});

// --- 4. DELETE THUMBNAIL ---
app.delete('/api/thumbnail/delete/:id', async (req, res) => {
    try {
        const deleted = await Thumbnail.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: "Thumbnail not found" });
        res.json({ message: "Thumbnail deleted successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting thumbnail" });
    }
});

// --- 5. AUTH ROUTES ---
app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;
    if (email === "user@test.com" && password === "password123") {
        res.status(200).json({ message: "Login successful", user: { name: "Test User", email: "user@test.com" } });
    } else {
        res.status(401).json({ message: "Invalid email or password" });
    }
});

app.get('/api/auth/verify', (req, res) => {
    res.json({ user: { name: "Test User", email: "user@test.com" } });
});

app.listen(3001, () => console.log('Backend server running on http://localhost:3001'));