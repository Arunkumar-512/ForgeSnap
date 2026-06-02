import { motion } from "motion/react";

import {
  colorSchemes,
  type ColorSchemeId,
} from "../assets/assets";

import { Check } from "lucide-react";

const ColorSchemeSelector = ({
  value,
  onChange,
}: {
  value: ColorSchemeId;
  onChange: (color: ColorSchemeId) => void;
}) => {
  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-[15px] font-semibold text-[#1F2937]">
            Color Scheme
          </h3>

          <p className="mt-1 text-sm text-[#6B7280]">
            Choose a clean visual tone for your thumbnail
          </p>
        </div>

        {/* ACTIVE TAG */}
        <div
          className="
            rounded-full
            border border-[#E7E5E4]
            bg-[#F8F6F2]
            px-3 py-1.5
            text-[11px] font-medium
            tracking-wide
            text-[#7D8F85]
          "
        >
          {
            colorSchemes.find((s) => s.id === value)?.name
          }
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {colorSchemes.map((scheme, i) => {
          const selected = value === scheme.id;

          return (
            <motion.button
              key={scheme.id}
              type="button"
              onClick={() => onChange(scheme.id)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.25,
                delay: i * 0.04,
              }}
              className={`
                relative overflow-hidden
                rounded-[26px]
                border
                p-4
                text-left
                transition-all duration-300
                ${
                  selected
                    ? `
                      border-[#7D8F85]/25
                      bg-[#F8F6F2]
                      shadow-[0_8px_24px_rgba(0,0,0,0.04)]
                    `
                    : `
                      border-[#ECE7DF]
                      bg-white
                      hover:border-[#D8D2C8]
                      hover:bg-[#FCFBF8]
                    `
                }
              `}
            >
              {/* TOP */}
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-[#1F2937]">
                  {scheme.name}
                </h4>

                {selected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 18,
                    }}
                    className="
                      flex h-5 w-5 items-center justify-center
                      rounded-full
                      bg-[#7D8F85]
                    "
                  >
                    <Check
                      size={11}
                      className="text-white"
                    />
                  </motion.div>
                )}
              </div>

              {/* PREVIEW */}
              <div
                className="
                  mt-4 overflow-hidden
                  rounded-2xl
                  border border-[#F1ECE5]
                "
              >
                <div className="flex h-20">
                  {scheme.colors.map((color, index) => (
                    <div
                      key={index}
                      className="flex-1 transition-all duration-300"
                      style={{
                        backgroundColor: color,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* MINI COLORS */}
              <div className="mt-4 flex items-center gap-2">
                {scheme.colors
                  .slice(0, 4)
                  .map((color, index) => (
                    <div
                      key={index}
                      className="
                        h-3.5 w-3.5 rounded-full
                        border border-white/70
                        shadow-sm
                      "
                      style={{
                        backgroundColor: color,
                      }}
                    />
                  ))}
              </div>

              {/* ACTIVE BAR */}
              <motion.div
                animate={{
                  opacity: selected ? 1 : 0,
                  scaleX: selected ? 1 : 0.7,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  absolute bottom-0 left-0
                  h-[3px] w-full
                  origin-left
                  bg-[#7D8F85]
                "
              />
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default ColorSchemeSelector;