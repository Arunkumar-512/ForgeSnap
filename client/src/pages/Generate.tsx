"use client";

import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  colorSchemes,
  type AspectRatio,
  type IThumbnail,
  type ThumbnailStyle,
  type ColorSchemeId, // ✅ ONLY import from assets
} from "../assets/assets";

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

  const [aspectRatio, setAspectRatio] =
    useState<AspectRatio>("16:9");

  // ✅ CLEAN TYPE (NO DUPLICATION)
  const [colorSchemeId, setColorSchemeId] =
    useState<ColorSchemeId>(colorSchemes[0].id);

  const [style, setStyle] =
    useState<ThumbnailStyle>("Bold & Graphic");

  const [styleDropdownOpen, setStyleDropdownOpen] =
    useState(false);

  const handleGenerate = async () => {
    if (!isLoggedIn) return toast.error("Please login first");
    if (!title.trim()) return toast.error("Title is required");

    try {
      setLoading(true);

      const api_payload = {
        title,
        prompt: additionalDetails,
        style,
        aspect_ratio: aspectRatio,
        color_scheme: colorSchemeId,
        text_overlay: true,
      };

      const { data } = await api.post(
        "/api/thumbnail/generate",
        api_payload
      );

      if (data.thumbnail) {
        navigate("/generate/" + data.thumbnail._id);
        toast.success(data.message);
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchThumbnail = async () => {
    try {
      const { data } = await api.get(
        `/api/user/thumbnail/${id}`
      );

      const thumb = data?.thumbnail;

      setThumbnail(thumb);
      setLoading(!thumb?.image_url);

      setAdditionalDetails(thumb?.user_prompt || "");
      setTitle(thumb?.title || "");

      // ✅ SAFE + FALLBACK (IMPORTANT)
      setColorSchemeId(
        (thumb?.color_scheme as ColorSchemeId) ||
          colorSchemes[0].id
      );

      setAspectRatio(thumb?.aspect_ratio || "16:9");
      setStyle(thumb?.style || "Bold & Graphic");
    } catch (error: any) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    if (isLoggedIn && id) fetchThumbnail();

    if (id && loading && isLoggedIn) {
      const interval = setInterval(fetchThumbnail, 5000);
      return () => clearInterval(interval);
    }
  }, [id, loading, isLoggedIn]);

  useEffect(() => {
    if (!id && thumbnail) setThumbnail(null);
  }, [pathname]);

  return (
    <>
      <SoftBackDrop />

      <div className="pt-24 min-h-screen text-gray-200">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-[420px_1fr] gap-8"
          >

            {/* LEFT PANEL */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className={`space-y-6 ${id && "pointer-events-none opacity-70"}`}
            >
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl space-y-6">

                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Create Thumbnail
                  </h2>
                  <p className="text-sm text-gray-400">
                    Turn your idea into a stunning visual
                  </p>
                </div>

                <div className="space-y-5">

                  {/* TITLE */}
                  <div className="space-y-2">
                    <label className="text-sm text-gray-300">
                      Title
                    </label>

                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      maxLength={100}
                      placeholder="e.g. 10 Tips for Better Sleep"
                      className="w-full px-4 py-3 rounded-lg border border-white/10
                      bg-black/30 text-white placeholder:text-gray-500
                      focus:outline-none focus:ring-2 focus:ring-cyan-400
                      transition-all duration-300 focus:scale-[1.02]"
                    />

                    <span className="text-xs text-gray-400 float-right">
                      {title.length}/100
                    </span>
                  </div>

                  <AspectRatioSelector
                    value={aspectRatio}
                    onChange={setAspectRatio}
                  />

                  <StyleSelector
                    value={style}
                    onChange={setStyle}
                    isOpen={styleDropdownOpen}
                    setIsOpen={setStyleDropdownOpen}
                  />

                  <ColorSchemeSelector
                    value={colorSchemeId}
                    onChange={setColorSchemeId}
                  />

                  {/* PROMPT */}
                  <div className="space-y-2">
                    <label className="text-sm text-gray-300">
                      Additional Prompt
                    </label>

                    <textarea
                      value={additionalDetails}
                      onChange={(e) =>
                        setAdditionalDetails(e.target.value)
                      }
                      rows={3}
                      placeholder="Add mood, colors, objects..."
                      className="w-full px-4 py-3 rounded-lg border border-white/10
                      bg-black/30 text-white placeholder:text-gray-500
                      focus:outline-none focus:ring-2 focus:ring-cyan-400
                      resize-none transition-all duration-300 focus:scale-[1.02]"
                    />
                  </div>
                </div>

                {/* BUTTON */}
                {!id && (
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleGenerate}
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl font-semibold
                    bg-gradient-to-r from-emerald-400 to-cyan-500
                    text-black shadow-lg disabled:opacity-60"
                  >
                    {loading ? "Generating..." : "Generate Thumbnail"}
                  </motion.button>
                )}
              </div>
            </motion.div>

            {/* RIGHT PANEL */}
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">

                <h2 className="text-lg font-semibold text-white mb-4">
                  Preview
                </h2>

                <PreviewPanel
                  thumbnail={thumbnail}
                  isLoading={loading}
                  aspectRatio={aspectRatio}
                />
              </div>
            </motion.div>

          </motion.div>
        </main>
      </div>
    </>
  );
};

export default Generate;