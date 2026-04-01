"use client";

import { useSearchParams, useNavigate } from "react-router-dom";
import { yt_html } from "../assets/assets";
import { motion } from "motion/react";
import { X } from "lucide-react";

const YtPreview = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const thumbnail_url = searchParams.get("thumbnail_url") || "";
  const title = searchParams.get("title") || "";

  const new_html = yt_html
    .replace("%%THUMBNAIL_URL%%", thumbnail_url)
    .replace("%%TITLE%%", title);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl"
    >
      {/* TOP BAR */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-4
        bg-gradient-to-r from-emerald-500/10 to-cyan-500/10
        border-b border-white/10 backdrop-blur-xl"
      >
        <h2 className="text-sm sm:text-base font-semibold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          YouTube Preview
        </h2>

        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-lg bg-white/5 hover:bg-rose-500/20 transition"
        >
          <X className="size-5 text-white" />
        </button>
      </motion.div>

      {/* PREVIEW */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="w-full h-full pt-16 px-4 sm:px-6 pb-6"
      >
        <div
          className="w-full h-full rounded-2xl overflow-hidden
          border border-white/10 shadow-2xl
          bg-black/40 backdrop-blur-xl"
        >
          <iframe
            srcDoc={new_html}
            width="100%"
            height="100%"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </motion.div>

      {/* GLOW EFFECT */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-emerald-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-1/3 w-[300px] h-[200px] bg-cyan-500/20 blur-3xl rounded-full" />
      </div>
    </motion.div>
  );
};

export default YtPreview;
