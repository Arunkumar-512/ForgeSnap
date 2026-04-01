import type React from "react";
import { thumbnailStyles, type ThumbnailStyle } from "../assets/assets";
import {
  ChevronDownIcon,
  CpuIcon,
  ImageIcon,
  PenToolIcon,
  SparklesIcon,
  SquareIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const StyleSelector = ({
  value,
  onChange,
  isOpen,
  setIsOpen,
}: {
  value: ThumbnailStyle;
  onChange: (style: ThumbnailStyle) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) => {
  const styleDescriptions: Record<ThumbnailStyle, string> = {
    "Bold & Graphic": "Vibrant colors and strong visuals",
    "Minimalist & Clean":
      "Simple, clean layouts focused on typography",
    photorealistic: "Looks like real high-quality photos",
    illustrated: "Creative hand-drawn or digital artwork",
    "tech/futuristic": "Sleek, modern and futuristic UI",
  };

  const styleIcons: Record<ThumbnailStyle, React.ReactNode> = {
    "Bold & Graphic": <SparklesIcon className="h-4 w-4" />,
    "Minimalist & Clean": <SquareIcon className="h-4 w-4" />,
    photorealistic: <ImageIcon className="h-4 w-4" />,
    illustrated: <PenToolIcon className="h-4 w-4" />,
    "tech/futuristic": <CpuIcon className="h-4 w-4" />,
  };

  return (
    <div className="relative space-y-3">
      {/* LABEL */}
      <label className="block text-sm font-medium text-gray-300">
        Thumbnail Style
      </label>

      {/* SELECT BUTTON */}
      <motion.button
        type="button"
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left
        bg-white/5 border border-white/10 backdrop-blur-xl
        hover:border-cyan-400/40 transition-all"
      >
        <div className="space-y-1">
          <div className="flex items-center gap-2 font-medium text-white">
            {styleIcons[value]}
            <span>{value}</span>
          </div>
          <p className="text-xs text-gray-400">
            {styleDescriptions[value]}
          </p>
        </div>

        <ChevronDownIcon
          className={`h-5 w-5 text-gray-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </motion.button>

      {/* DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute z-50 mt-2 w-full rounded-xl
            bg-[#06070d]/90 backdrop-blur-2xl border border-white/10 shadow-xl"
          >
            {thumbnailStyles.map((style, i) => (
              <motion.button
                key={style}
                type="button"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => {
                  onChange(style);
                  setIsOpen(false);
                }}
                className="flex w-full items-start gap-3 px-4 py-3 text-left
                hover:bg-white/5 transition"
              >
                <div className="mt-1 text-cyan-400">
                  {styleIcons[style]}
                </div>

                <div>
                  <p className="font-medium text-white">{style}</p>
                  <p className="text-xs text-gray-400">
                    {styleDescriptions[style]}
                  </p>
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StyleSelector;