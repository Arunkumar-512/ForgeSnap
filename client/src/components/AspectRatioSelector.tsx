import { RectangleHorizontal, RectangleVertical, Square } from "lucide-react";
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
  const iconMap: Record<AspectRatio, React.ReactNode> = {
    "16:9": <RectangleHorizontal className="size-6 text-cyan-400" />,
    "1:1": <Square className="size-6 text-emerald-400" />,
    "9:16": <RectangleVertical className="size-6 text-cyan-300" />,
  };

  return (
    <div className="space-y-4">
      {/* LABEL */}
      <label className="block text-sm font-medium text-gray-300">
        Aspect Ratio
      </label>

      {/* OPTIONS */}
      <div className="grid grid-cols-3 gap-3">
        {aspectRatios.map((ratio, i) => {
          const selected = value === ratio;

          return (
            <motion.button
              key={ratio}
              type="button"
              onClick={() => onChange(ratio)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`flex flex-col items-center justify-center gap-2 rounded-xl px-4 py-4
                transition-all duration-300 backdrop-blur-xl
                ${
                  selected
                    ? "bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 border border-cyan-400 shadow-lg shadow-cyan-500/20"
                    : "bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-white/10"
                }
              `}
            >
              {/* ICON */}
              <div
                className={`transition ${
                  selected ? "scale-110" : "opacity-80"
                }`}
              >
                {iconMap[ratio]}
              </div>

              {/* TEXT */}
              <span
                className={`text-sm font-medium tracking-wider ${
                  selected ? "text-cyan-400" : "text-gray-300"
                }`}
              >
                {ratio}
              </span>

              {/* ACTIVE INDICATOR */}
              {selected && (
                <motion.div
                  layoutId="activeRatio"
                  className="absolute inset-0 rounded-xl border-2 border-emerald-400"
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default AspectRatioSelector;