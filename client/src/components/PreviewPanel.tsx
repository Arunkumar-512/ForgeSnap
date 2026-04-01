import { DownloadIcon, ImageIcon, Loader2Icon } from "lucide-react";
import type { AspectRatio, IThumbnail } from "../assets/assets";
import { motion, AnimatePresence } from "motion/react";

const PreviewPanel = ({
  thumbnail,
  isLoading,
  aspectRatio,
}: {
  thumbnail: IThumbnail | null;
  isLoading: boolean;
  aspectRatio: AspectRatio;
}) => {
  const aspectClasses: Record<AspectRatio, string> = {
    "16:9": "aspect-video",
    "1:1": "aspect-square",
    "9:16": "aspect-[9/16]",
  };

  const onDownload = () => {
    if (!thumbnail?.image_url) return;

    const link = document.createElement("a");
    link.href = thumbnail.image_url.replace(
      "/upload",
      "/upload/fl_attachment"
    );
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div
        className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl ${aspectClasses[aspectRatio]}`}
      >

        {/* LOADING */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-4
              bg-black/40 backdrop-blur-lg z-10"
            >
              <Loader2Icon className="size-8 animate-spin text-cyan-400" />

              <div className="text-center">
                <p className="text-sm font-medium text-white">
                  AI is creating your thumbnail...
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  This may take 10–20 seconds
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* IMAGE */}
        {!isLoading && thumbnail?.image_url && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="group relative h-full w-full"
          >
            <img
              src={thumbnail.image_url}
              alt={thumbnail.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* HOVER OVERLAY */}
            <div
              className="absolute inset-0 flex items-end justify-center
              bg-gradient-to-t from-black/60 via-black/20 to-transparent
              opacity-0 group-hover:opacity-100 transition duration-300"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onDownload}
                className="mb-6 flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium
                bg-gradient-to-r from-emerald-400 to-cyan-500 text-black shadow-lg"
              >
                <DownloadIcon className="size-4" />
                Download
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* EMPTY STATE */}
        {!isLoading && !thumbnail?.image_url && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 m-2 flex flex-col items-center justify-center gap-4
            rounded-xl border-2 border-dashed border-cyan-400/30
            bg-white/5 backdrop-blur-xl"
          >
            <div className="hidden sm:flex size-20 items-center justify-center rounded-full bg-cyan-500/10">
              <ImageIcon className="size-10 text-cyan-300 opacity-60" />
            </div>

            <div className="px-4 text-center">
              <p className="text-white font-medium">
                Generate your first thumbnail
              </p>
              <p className="mt-1 text-xs text-gray-400">
                Fill the form and click Generate
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PreviewPanel;