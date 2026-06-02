import type React from "react";

import {
  thumbnailStyles,
  type ThumbnailStyle,
} from "../assets/assets";

import {
  ChevronDownIcon,
  CpuIcon,
  ImageIcon,
  PenToolIcon,
  SparklesIcon,
  Layers3Icon,
  CheckIcon,
} from "lucide-react";

import {
  motion,
  AnimatePresence,
} from "motion/react";

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
  const styleDescriptions: Record<
    ThumbnailStyle,
    string
  > = {
    "Bold & Graphic":
      "Strong visuals with bold layouts",

    "Minimalist & Clean":
      "Simple spacing and clean typography",

    Photorealistic:
      "Cinematic and realistic visuals",

    Illustrated:
      "Creative illustrated artwork",

    "Tech/Futuristic":
      "Modern futuristic design style",
  };

  const styleIcons: Record<
    ThumbnailStyle,
    React.ReactNode
  > = {
    "Bold & Graphic": (
      <SparklesIcon className="h-4 w-4" />
    ),

    "Minimalist & Clean": (
      <Layers3Icon className="h-4 w-4" />
    ),

    Photorealistic: (
      <ImageIcon className="h-4 w-4" />
    ),

    Illustrated: (
      <PenToolIcon className="h-4 w-4" />
    ),

    "Tech/Futuristic": (
      <CpuIcon className="h-4 w-4" />
    ),
  };

  return (
    <div className="relative space-y-3">
      {/* HEADER */}
      <div>
        <h3 className="text-[15px] font-semibold text-[var(--color-dark)]">
          Style
        </h3>

        <p className="mt-1 text-sm text-[var(--color-text-muted)]">
          Choose a thumbnail design style
        </p>
      </div>

      {/* SELECT */}
      <motion.button
        type="button"
        whileTap={{ scale: 0.99 }}
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex w-full items-center justify-between
          rounded-2xl
          border border-[var(--color-border)]
          bg-white/70
          px-4 py-3.5
          text-left
          transition-all duration-200
          hover:border-[var(--color-dark)]/20
        "
      >
        {/* LEFT */}
        <div className="flex items-center gap-3">
          <div
            className="
              flex h-10 w-10 items-center justify-center
              rounded-xl
              bg-[var(--color-bg-secondary)]
              text-[var(--color-dark)]
            "
          >
            {styleIcons[value]}
          </div>

          <div>
            <p className="text-sm font-medium text-[var(--color-dark)]">
              {value}
            </p>

            <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">
              {styleDescriptions[value]}
            </p>
          </div>
        </div>

        {/* ICON */}
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className="
            flex h-8 w-8 items-center justify-center
            rounded-lg
            bg-[var(--color-bg-secondary)]
            text-[var(--color-text-muted)]
          "
        >
          <ChevronDownIcon className="h-4 w-4" />
        </motion.div>
      </motion.button>

      {/* DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 8,
            }}
            transition={{
              duration: 0.18,
            }}
            className="
              absolute z-50 w-full overflow-hidden
              rounded-2xl
              border border-[var(--color-border)]
              bg-[#FAF7F2]
              shadow-[0_10px_30px_rgba(0,0,0,0.06)]
            "
          >
            <div className="p-2">
              {thumbnailStyles.map((style) => {
                const active = value === style;

                return (
                  <motion.button
                    key={style}
                    type="button"
                    whileHover={{
                      x: 2,
                    }}
                    onClick={() => {
                      onChange(style);
                      setIsOpen(false);
                    }}
                    className={`
                      flex w-full items-center gap-3
                      rounded-xl
                      px-3 py-3
                      text-left
                      transition-all duration-200
                      ${
                        active
                          ? `
                            bg-[rgba(143,168,155,0.10)]
                          `
                          : `
                            hover:bg-white/70
                          `
                      }
                    `}
                  >
                    {/* ICON */}
                    <div
                      className={`
                        flex h-10 w-10 items-center justify-center
                        rounded-xl
                        transition-all duration-200
                        ${
                          active
                            ? `
                              bg-[rgba(143,168,155,0.16)]
                              text-[var(--color-dark)]
                            `
                            : `
                              bg-white
                              text-[var(--color-text-muted)]
                            `
                        }
                      `}
                    >
                      {styleIcons[style]}
                    </div>

                    {/* CONTENT */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <p
                          className={`
                            text-sm font-medium
                            ${
                              active
                                ? "text-[var(--color-dark)]"
                                : "text-[var(--color-dark)]"
                            }
                          `}
                        >
                          {style}
                        </p>

                        {active && (
                          <div
                            className="
                              flex h-5 w-5 items-center justify-center
                              rounded-full
                              bg-[var(--color-dark)]
                            "
                          >
                            <CheckIcon className="h-3 w-3 text-white" />
                          </div>
                        )}
                      </div>

                      <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                        {styleDescriptions[style]}
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StyleSelector;