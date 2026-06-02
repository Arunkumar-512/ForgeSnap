"use client";

import { useEffect, useState, useCallback } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { colorSchemes, type AspectRatio, type IThumbnail, type ThumbnailStyle, type ColorSchemeId } from "../assets/assets";
import { Type, FileText } from "lucide-react";
import SoftBackDrop from "../components/SoftBackDrop";
import AspectRatioSelector from "../components/AspectRatioSelector";
import StyleSelector from "../components/StyleSelector";
import ColorSchemeSelector from "../components/ColorSchemeSelector";
import PreviewPanel from "../components/PreviewPanel";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import api from "../configs/api";
import { motion } from "motion/react";

const Generate = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  const [title, setTitle] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [thumbnail, setThumbnail] = useState<IThumbnail | null>(null);
  const [loading, setLoading] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>("16:9");
  const [colorSchemeId, setColorSchemeId] = useState<ColorSchemeId>(colorSchemes[0].id);
  const [style, setStyle] = useState<ThumbnailStyle>("Bold & Graphic");
  const [styleDropdownOpen, setStyleDropdownOpen] = useState(false);

  const resetForm = useCallback(() => {
    setTitle("");
    setAdditionalDetails("");
    setThumbnail(null);
    setLoading(false);
    setAspectRatio("16:9");
    setStyle("Bold & Graphic");
    setColorSchemeId(colorSchemes[0].id);
  }, []);

  const fetchThumbnail = useCallback(async () => {
    if (!id) return;
    try {
      const { data } = await api.get(`/api/user/thumbnail/${id}`);
      const thumb = data?.thumbnail as IThumbnail;
      if (thumb) {
        setThumbnail(thumb);
        setLoading(!thumb.image_url);
        setTitle(thumb.title);
        setAdditionalDetails(thumb.user_prompt);
        setAspectRatio(thumb.aspect_ratio as AspectRatio);
        setStyle(thumb.style as ThumbnailStyle);
        setColorSchemeId(thumb.color_scheme as ColorSchemeId);
      }
    } catch {
      toast.error("Failed to load thumbnail");
    }
  }, [id]);

  const handleGenerate = async () => {
    if (!isLoggedIn) return toast.error("Please login to generate");
    if (!title.trim()) return toast.error("Title is required");

    setLoading(true);
    // CRITICAL FIX: Direct the AI to generate a clean background suitable for text overlay
    const enhancedPrompt = `${additionalDetails}. Style: ${style}. High-quality background, vivid colors, cinematic lighting, no text, no letters, clear space for text overlay.`;

    try {
      const { data } = await api.post("/api/thumbnail/generate", { 
        title, 
        prompt: enhancedPrompt, 
        style, 
        aspect_ratio: aspectRatio, 
        color_scheme: colorSchemeId 
      });
      
      if (data?.thumbnail?._id) {
        toast.success("Background generated!");
        navigate(`/generate/${data.thumbnail._id}`);
      }
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Generation failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!id) resetForm();
    else if (isLoggedIn) fetchThumbnail();
  }, [id, isLoggedIn, fetchThumbnail, resetForm, pathname]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (id && loading && isLoggedIn) {
      interval = setInterval(fetchThumbnail, 5000);
    }
    return () => clearInterval(interval);
  }, [id, loading, isLoggedIn, fetchThumbnail]);

  return (
    <>
      <SoftBackDrop />
      <div className="relative min-h-screen bg-[#FAF7F2] pt-24">
        <main className="relative z-10 mx-auto max-w-5xl px-4 pb-20">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center">
            <h1 className="text-4xl font-extrabold text-[#2C3539]">Thumbnail Studio</h1>
          </motion.div>

          <div className="space-y-8">
            {/* The PreviewPanel now handles the Text Overlay */}
            <div className="rounded-[32px] border border-neutral-200/80 bg-white/90 p-6 shadow-lg">
              <PreviewPanel 
                thumbnail={thumbnail} 
                isLoading={loading} 
                aspectRatio={aspectRatio} 
                title={title} // Pass the title here
              />
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-neutral-200/80 bg-white/90 p-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold mb-2.5"><Type className="h-4 w-4" /> Title (Text Overlay)</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="h-12 w-full rounded-xl border px-4" />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold mb-2.5"><FileText className="h-4 w-4" /> Scene Prompt</label>
                    <textarea value={additionalDetails} onChange={(e) => setAdditionalDetails(e.target.value)} rows={1} className="w-full rounded-xl border px-4 py-3" />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <AspectRatioSelector value={aspectRatio} onChange={setAspectRatio} />
                <StyleSelector value={style} onChange={setStyle} isOpen={styleDropdownOpen} setIsOpen={setStyleDropdownOpen} />
                <ColorSchemeSelector value={colorSchemeId} onChange={setColorSchemeId} />
              </div>

              <button onClick={handleGenerate} disabled={loading} className="h-14 w-full rounded-2xl bg-[#2C3539] text-white font-bold hover:bg-black disabled:opacity-50">
                {loading ? "Constructing Canvas..." : (id ? "Regenerate Background" : "Generate Thumbnail Canvas")}
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Generate;