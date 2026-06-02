import {
  DownloadIcon,
  ImageIcon,
  Loader2Icon,
  Sparkles,
} from "lucide-react";
import type { AspectRatio, IThumbnail } from "../assets/assets";
import { motion, AnimatePresence } from "motion/react";

const PreviewPanel = ({
  thumbnail,
  isLoading,
  aspectRatio,
  title, // Added title prop
}: {
  thumbnail: IThumbnail | null;
  isLoading: boolean;
  aspectRatio: AspectRatio;
  title: string; // Type definition for title
}) => {
  const aspectClasses: Record<AspectRatio, string> = {
    "16:9": "aspect-video",
    "1:1": "aspect-square",
    "9:16": "aspect-[9/16]",
  };

  const onDownload = () => {
    if (!thumbnail?.image_url) return;
    const link = document.createElement("a");
    link.href = thumbnail.image_url.replace("/upload", "/upload/fl_attachment");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="w-full">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-neutral-500">Live Preview</p>
          <h3 className="mt-1 text-2xl font-semibold text-neutral-900">Thumbnail Output</h3>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[32px] border border-neutral-200 bg-white/70 shadow-lg backdrop-blur-2xl">
        <div className={`relative overflow-hidden ${aspectClasses[aspectRatio]}`}>
          
          {/* LOADING STATE */}
          <AnimatePresence>
            {isLoading && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
                className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/80 backdrop-blur-xl"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-neutral-100">
                  <Loader2Icon className="size-8 animate-spin text-neutral-900" />
                </div>
                <p className="mt-6 font-semibold">Creating your thumbnail...</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* GENERATED IMAGE + TEXT OVERLAY */}
          {!isLoading && thumbnail?.image_url && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }} className="relative h-full w-full">
              <img src={thumbnail.image_url} alt={thumbnail.title} className="h-full w-full object-cover" />
              
              {/* TEXT OVERLAY LAYER */}
              <div className="absolute inset-0 z-10 flex items-center justify-center p-8">
                <h1 className="text-white text-center text-4xl md:text-6xl font-black uppercase tracking-tighter drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                  {title}
                </h1>
              </div>

              {/* TOP BADGE */}
              <div className="absolute left-5 top-5 z-20 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 backdrop-blur-md">
                <Sparkles size={14} className="text-white" />
                <span className="text-xs font-medium text-white">AI Generated</span>
              </div>

              {/* BOTTOM DOWNLOAD */}
              <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-sm text-white/80 font-medium">Ready to export</p>
                <button onClick={onDownload} className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-bold text-black hover:bg-neutral-200">
                  <DownloadIcon size={16} /> Download
                </button>
              </div>
            </motion.div>
          )}

          {/* EMPTY STATE */}
          {!isLoading && !thumbnail?.image_url && (
            <div className="flex h-full min-h-[420px] flex-col items-center justify-center p-6 text-center">
              <ImageIcon className="size-12 text-neutral-300" />
              <h3 className="mt-4 text-xl font-semibold">Preview will appear here</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PreviewPanel;  