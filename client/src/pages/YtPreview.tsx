"use client";

import { useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { yt_html } from "../assets/assets";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ExternalLink,
  MonitorPlay,
  Sparkles,
  Youtube,
} from "lucide-react";

const YtPreview = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Retrieve parameters safely
  const thumbnail_url = searchParams.get("thumbnail_url") || "";
  const title = searchParams.get("title") || "Untitled Thumbnail";

  // Use memo to prevent re-processing the string unless params change
  const new_html = useMemo(() => {
    return yt_html
      .replace(/%%THUMBNAIL_URL%%/g, encodeURI(thumbnail_url))
      .replace(/%%TITLE%%/g, title);
  }, [thumbnail_url, title]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030712] text-white">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.10),transparent_30%)]" />
      <div className="absolute left-[-10%] top-10 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-[-10%] h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[140px]" />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-2xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white transition-all hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-300">
                <Youtube className="h-3.5 w-3.5" /> Live Preview
              </div>
              <h1 className="mt-2 text-xl font-bold sm:text-2xl">YouTube Thumbnail Preview</h1>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl px-6 py-6"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-medium text-cyan-300">
                <Sparkles className="h-3.5 w-3.5" /> AI Generated
              </div>
              <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">{title}</h2>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-4 backdrop-blur-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-400/20 to-cyan-400/20 text-violet-300">
                <ExternalLink className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold">Responsive Preview</p>
                <p className="text-xs text-slate-400">Desktop optimized</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Iframe Preview Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] p-4 sm:p-6 backdrop-blur-2xl shadow-[0_30px_120px_rgba(0,0,0,0.45)]"
        >
          <div className="relative z-10 mb-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-5 py-4 backdrop-blur-xl">
            <div className="flex items-center gap-2"><div className="h-3 w-3 rounded-full bg-rose-400"/><div className="h-3 w-3 rounded-full bg-amber-400"/><div className="h-3 w-3 rounded-full bg-emerald-400"/></div>
            <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">Live</div>
          </div>
          
          <div className="relative z-10 overflow-hidden rounded-[28px] border border-white/10 bg-black shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
            <iframe
              srcDoc={new_html}
              title="YouTube Preview"
              width="100%"
              height="700"
              sandbox="allow-scripts"
              className="h-[70vh] w-full bg-white"
            />
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default YtPreview;