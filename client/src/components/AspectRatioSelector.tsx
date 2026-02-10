import { RectangleHorizontal, RectangleVertical, Square } from "lucide-react";
import { aspectRatios, type AspectRatio } from "../assets/assets";
import type React from "react";

const AspectRatioSelector = ({
  value,
  onChange,
}: {
  value: AspectRatio;
  onChange: (ratio: AspectRatio) => void;
}) => {
  const iconMap = {
    "16:9": <RectangleHorizontal className="size-6 text-indigo-400" />,
    "1:1": <Square className="size-6 text-violet-400" />,
    "9:16": <RectangleVertical className="size-6 text-cyan-400" />,
  } as Record<AspectRatio, React.ReactNode>;

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-zinc-300">
        Aspect Ratio
      </label>

      <div className="flex flex-wrap gap-2">
        {aspectRatios.map((ratio) => {
          const selected = value === ratio;

          return (
            <button
              key={ratio}
              type="button"
              onClick={() => onChange(ratio)}
              className={`flex items-center gap-2 rounded-md border px-5 py-2.5 text-sm
                transition-all duration-200
                ${
                  selected
                    ? "border-indigo-500/40 bg-gradient-to-r from-indigo-500/15 via-violet-500/15 to-cyan-500/15 text-indigo-300"
                    : "border-white/10 text-zinc-300 hover:border-indigo-500/30 hover:bg-indigo-500/10"
                }`}
            >
              {iconMap[ratio]}
              <span className="tracking-widest">{ratio}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AspectRatioSelector;
