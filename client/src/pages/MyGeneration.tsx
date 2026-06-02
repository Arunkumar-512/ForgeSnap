"use client";

import { useEffect, useState } from "react";
import { type IThumbnail } from "../assets/assets";
import SoftBackDrop from "../components/SoftBackDrop";
import { useNavigate } from "react-router-dom";
import { Download, Trash2, Sparkles, Images, Wand2 } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import api from "../configs/api";
import toast from "react-hot-toast";
import { motion } from "motion/react";

const MyGeneration = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [thumbnails, setThumbnails] = useState<IThumbnail[]>([]);
  const [loading, setLoading] = useState(false);

  const aspectRatioClassMap: Record<string, string> = {
    "16:9": "aspect-video",
    "1:1": "aspect-square",
    "9:16": "aspect-[9/16]",
  };

  const fetchThumbnails = async () => {
    try {
      setLoading(true);
      const { data } = await api.get("/api/user/thumbnails");
      setThumbnails(data.thumbnails || []);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed to load generations");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (e: React.MouseEvent, image_url: string) => {
    e.stopPropagation();
    const link = document.createElement("a");
    link.href = image_url;
    link.setAttribute("download", "thumbnail.png");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleDelete = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (!window.confirm("Delete this thumbnail permanently?")) return;

    try {
      const { data } = await api.delete(`/api/thumbnail/delete/${id}`);
      toast.success(data.message);
      setThumbnails((prev) => prev.filter((thumb) => thumb._id !== id));
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Delete failed");
    }
  };

  useEffect(() => {
    if (isLoggedIn) fetchThumbnails();
  }, [isLoggedIn]);

  return (
    <>
      <SoftBackDrop />
      <div className="relative min-h-screen overflow-hidden pt-28 pb-16 text-white">
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          
          {/* HEADER */}
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} className="mb-10 flex flex-col gap-6 lg:flex-row lg:justify-between">
            <div>
              <h1 className="text-4xl font-bold">My <span className="text-cyan-300">Generations</span></h1>
              <p className="mt-4 text-slate-400">Manage and download your AI-generated thumbnails.</p>
            </div>
            <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-2xl">
              <Images className="h-6 w-6 text-cyan-300" />
              <div>
                <p className="text-2xl font-bold">{thumbnails.length}</p>
                <p className="text-sm text-slate-400">Total Thumbnails</p>
              </div>
            </div>
          </motion.div>

          {/* GRID */}
          {!loading && thumbnails.length > 0 && (
            <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {thumbnails.map((thumb) => (
                <motion.div
                  key={thumb._id}
                  whileHover={{ y: -8 }}
                  onClick={() => navigate(`/generate/${thumb._id}`)}
                  className="group relative cursor-pointer overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-2xl"
                >
                  <img src={thumb.image_url} alt={thumb.title} className={`w-full rounded-2xl object-cover ${aspectRatioClassMap[thumb.aspect_ratio] || "aspect-video"}`} />
                  <div className="mt-4">
                    <h3 className="font-semibold truncate">{thumb.title}</h3>
                    <div className="mt-4 flex gap-2">
                      <button onClick={(e) => handleDownload(e, thumb.image_url)} className="p-2 rounded-full bg-white/10 hover:bg-white/20">
                        <Download className="h-4 w-4" />
                      </button>
                      <button onClick={(e) => handleDelete(e, thumb._id!)} className="p-2 rounded-full bg-red-500/20 hover:bg-red-500/40 text-red-400">
                        <Trash2 className="h-4 w-4" />  
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* EMPTY STATE */}
          {!loading && thumbnails.length === 0 && (
            <div className="text-center py-24 border border-white/10 rounded-[36px] bg-white/[0.04]">
              <Wand2 className="h-10 w-10 mx-auto text-cyan-300" />
              <h2 className="mt-8 text-2xl font-bold">No thumbnails yet</h2>
              <button onClick={() => navigate("/generate")} className="mt-8 bg-cyan-400 px-6 py-3 font-semibold text-black rounded-2xl">Generate Thumbnail</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyGeneration;