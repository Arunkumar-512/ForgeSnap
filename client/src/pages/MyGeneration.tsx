"use client";

import { useEffect, useState } from "react";
import { type IThumbnail } from "../assets/assets";
import SoftBackDrop from "../components/SoftBackDrop";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowUpRightIcon,
  DownloadIcon,
  TrashIcon,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import api from "../configs/api";
import toast from "react-hot-toast";
import { motion } from "motion/react";

const MyGeneration = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const aspectRatioClassMap = {
    "16:9": "aspect-video",
    "1:1": "aspect-square",
    "9:16": "aspect-[9/16]",
  } as Record<string, string>;

  const [thumbnails, setThumbnails] = useState<IThumbnail[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchThumbnails = async () => {
    try {
      setLoading(true);
      const { data } = await api.get("/api/user/thumbnails");
      setThumbnails(data.thumbnails || []);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (image_url: string) => {
    const link = document.createElement("a");
    link.href = image_url.replace("/upload", "/upload/fl_attachment");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleDelete = async (id: string) => {
    try {
      const confirm = window.confirm(
        "Are you sure you want to delete this thumbnail?"
      );
      if (!confirm) return;

      const { data } = await api.delete(
        `/api/thumbnail/delete/${id}`
      );

      toast.success(data.message);
      setThumbnails((prev) => prev.filter((t) => t._id !== id));
    } catch (error: any) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    if (isLoggedIn) fetchThumbnails();
  }, [isLoggedIn]);

  return (
    <>
      <SoftBackDrop />

      <div className="pt-28 min-h-screen text-gray-200 px-4 sm:px-6 lg:px-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
            My Generations
          </h1>
          <p className="text-sm text-gray-400 mt-2">
            Manage all your AI-generated thumbnails
          </p>
        </motion.div>

        {/* LOADING */}
        {loading && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-[260px] rounded-2xl bg-white/5 border border-white/10 animate-pulse"
              />
            ))}
          </div>
        )}

        {/* EMPTY */}
        {!loading && thumbnails.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-28"
          >
            <h2 className="text-xl font-semibold text-white">
              No thumbnails yet
            </h2>
            <p className="text-gray-400 mt-2">
              Start creating amazing thumbnails 🚀
            </p>
          </motion.div>
        )}

        {/* GRID */}
        {!loading && thumbnails.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {thumbnails.map((thumb, i) => {
              const aspectClass =
                aspectRatioClassMap[thumb.aspect_ratio || "16:9"];

              return (
                <motion.div
                  key={thumb._id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -6 }}
                  onClick={() =>
                    navigate(`/generate/${thumb._id}`)
                  }
                  className="group cursor-pointer rounded-2xl overflow-hidden
                  bg-white/5 backdrop-blur-xl border border-white/10
                  shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
                >
                  {/* IMAGE */}
                  <div
                    className={`relative ${aspectClass} bg-black/30 overflow-hidden`}
                  >
                    {thumb.image_url ? (
                      <img
                        src={thumb.image_url}
                        alt={thumb.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-sm text-gray-400">
                        {thumb.isGenerating
                          ? "Generating..."
                          : "No Image"}
                      </div>
                    )}

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />

                    {thumb.isGenerating && (
                      <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-sm text-cyan-300 font-medium">
                        Generating...
                      </div>
                    )}
                  </div>

                  {/* CONTENT */}
                  <div className="p-4 space-y-2">
                    <h3 className="text-sm font-semibold text-white line-clamp-2">
                      {thumb.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300">
                        {thumb.style}
                      </span>

                      <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300">
                        {thumb.color_scheme}
                      </span>

                      <span className="px-2 py-0.5 rounded bg-white/10 text-gray-300">
                        {thumb.aspect_ratio}
                      </span>
                    </div>

                    <p className="text-xs text-gray-500">
                      {new Date(
                        thumb.createdAt!
                      ).toDateString()}
                    </p>
                  </div>

                  {/* ACTIONS */}
                  <div
                    className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <TrashIcon
                      onClick={() => handleDelete(thumb._id)}
                      className="size-7 p-1.5 rounded-lg bg-black/50 hover:bg-rose-600 transition"
                    />

                    <DownloadIcon
                      onClick={() =>
                        handleDownload(thumb.image_url!)
                      }
                      className="size-7 p-1.5 rounded-lg bg-black/50 hover:bg-cyan-600 transition"
                    />

                    <Link
                      target="_blank"
                      to={`/preview?thumbnail_url=${thumb.image_url}&title=${thumb.title}`}
                    >
                      <ArrowUpRightIcon className="size-7 p-1.5 rounded-lg bg-black/50 hover:bg-violet-600 transition" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default MyGeneration;