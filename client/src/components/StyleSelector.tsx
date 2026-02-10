import type React from "react";
import { thumbnailStyles, type ThumbnailStyle } from "../assets/assets";
import {
  ChevronDownIcon,
  CpuIcon,
  ImageIcon,
  PenToolIcon,
  SparkleIcon,
  SquareIcon,
} from "lucide-react";

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
      "Simple, uncluttered designs with focus on typography",
    photorealistic: "High-quality images that look like real photos",
    illustrated:
      "hand-drawn and digitally created artwork with a creative flair",
    "tech/futuristic": "Modern,sleek, tech-inspired",
  };

  const styleIcons: Record<ThumbnailStyle, React.ReactNode> = {
    "Bold & Graphic ": <SparkleIcon className="h-4 w-4" />,
    "Minimalist & Clean": <SquareIcon className="h-4 w-4" />,
    photorealistic: <ImageIcon className="h-4 w-4" />,
    illustrated: <PenToolIcon className="h-4 w-4" />,
    "tech/futuristic": <CpuIcon className="h-4 w-4" />,
  };
  return (
    <div className="relative space-y-3 dark">
      <label className="block text-sm font-medium text-zinc-300">
        Thumbnail Style
      </label>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-md border px-4 py-3 
    text-left transition bg-indigo-500/10 border-indigo-500/20 text-zinc-200 hover:bg-indigo-500/15"
      >
        <div className="space-y-1">
          <div className="flex items-center gap-2 font-medium">
            {styleIcons[value]}
            <span>{value}</span>
          </div>
          <p className="text-xs text-zinc-400">{styleDescriptions[value]}</p>
        </div>

        <ChevronDownIcon
          className={[
            "h-5 w-5 text-zinc-400 transition-transform",
            isOpen && "rotate-180",
          ].join(" ")}
        />
      </button>

      {isOpen && (
        <div
          className="absolute bottom-0 z-50 mt-1 w-full rounded-md 
      border border-indigo-500/20 bg-indigo-950/30 backdrop-blur-3xl shadow-lg"
        >
          {thumbnailStyles.map((style) => (
            <button
              key={style}
              type="button"
              onClick={() => {
                onChange(style);
                setIsOpen(false);
              }}
              className="flex w-full items-start gap-3 px-3 py-3 text-left transition hover:bg-indigo-900/30"
            >
              <div className="mt-0.5">{styleIcons[style]}</div>
              <div>
                <p className="font-medium text-zinc-200">{style}</p>
                <p className="text-xs text-zinc-400">
                  {styleDescriptions[style]}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default StyleSelector;
