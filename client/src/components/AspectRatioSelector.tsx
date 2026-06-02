import { RectangleHorizontal, RectangleVertical, Square, Check } from "lucide-react";
import { aspectRatios, type AspectRatio } from "../assets/assets";
import type React from "react";
import { motion } from "motion/react";

const AspectRatioSelector = ({
  value,
  onChange,
}: {
  value: AspectRatio;
  onChange: (ratio: AspectRatio) => void;
}) => {
  // Use a fallback object to prevent undefined errors
  const iconMap: Record<string, React.ReactNode> = {
    "16:9": <RectangleHorizontal className="size-5 text-[#7D8F85]" />,
    "1:1": <Square className="size-5 text-[#7D8F85]" />,
    "9:16": <RectangleVertical className="size-5 text-[#7D8F85]" />,
  };

  const labelMap: Record<string, string> = {
    "16:9": "YouTube",
    "1:1": "Instagram",
    "9:16": "Shorts",
  };

  const descriptionMap: Record<string, string> = {
    "16:9": "Best for YouTube thumbnails",
    "1:1": "Perfect for social posts",
    "9:16": "Great for Shorts & Reels",
  };

  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-[15px] font-semibold text-[#1F2937]">Aspect Ratio</h3>
        <p className="mt-1 text-sm text-[#6B7280]">Choose the output format</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {aspectRatios.map((ratio, i) => {
          const selected = value === ratio;

          return (
            <motion.button
              key={ratio}
              type="button"
              onClick={() => onChange(ratio as AspectRatio)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25, delay: i * 0.05 }}
              className={`relative overflow-hidden rounded-[24px] border p-4 text-left transition-all duration-300 ${
                selected
                  ? "border-[#7D8F85]/30 bg-[#F8F6F2] shadow-[0_6px_20px_rgba(0,0,0,0.04)]"
                  : "border-[#ECE7DF] bg-white hover:border-[#D8D2C8] hover:bg-[#FCFBF8]"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className={`flex h-11 w-11 items-center justify-center rounded-2xl transition-all duration-300 ${selected ? "bg-[#E7EEE9]" : "bg-[#F5F3EF]"}`}>
                  {iconMap[ratio] || <Square className="size-5 text-[#7D8F85]" />}
                </div>

                {selected && (
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex h-6 w-6 items-center justify-center rounded-full bg-[#7D8F85]">
                    <Check size={13} className="text-white" />
                  </motion.div>
                )}
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-base font-semibold text-[#111827]">{ratio}</h4>
                  <span className="rounded-full bg-[#F3F1EC] px-2.5 py-1 text-[10px] font-medium text-[#78716C]">
                    {labelMap[ratio] || "Custom"}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-[#6B7280]">{descriptionMap[ratio] || ""}</p>
              </div>

              <motion.div
                animate={{ opacity: selected ? 1 : 0, scaleX: selected ? 1 : 0.7 }}
                className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-[#7D8F85]"
              />
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default AspectRatioSelector;