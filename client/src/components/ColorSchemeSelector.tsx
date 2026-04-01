import { motion } from "motion/react";
import {
  colorSchemes,
  type ColorSchemeId,
} from "../assets/assets";

const ColorSchemeSelector = ({
  value,
  onChange,
}: {
  value: ColorSchemeId;
  onChange: (color: ColorSchemeId) => void;
}) => {
  return (
    <div className="space-y-4">
      {/* LABEL */}
      <label className="block text-sm font-medium text-gray-300">
        Color Scheme
      </label>

      {/* GRID */}
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
        {colorSchemes.map((scheme, i) => (
          <motion.button
            key={scheme.id}
            type="button"
            onClick={() => onChange(scheme.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className={`relative rounded-xl overflow-hidden transition-all duration-300
              ${
                value === scheme.id
                  ? "ring-2 ring-cyan-400 shadow-lg shadow-cyan-500/20"
                  : "ring-1 ring-white/10 hover:ring-cyan-400/50"
              }
            `}
            title={scheme.name}
          >
            {/* COLOR STRIP */}
            <div className="flex h-12 rounded-xl overflow-hidden">
              {scheme.colors.map((color, index) => (
                <div
                  key={index}
                  className="flex-1"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            {/* ACTIVE INDICATOR */}
            {value === scheme.id && (
              <motion.div
                layoutId="activeColor"
                className="absolute inset-0 rounded-xl border-2 border-emerald-400"
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* SELECTED TEXT */}
      <p className="text-xs text-gray-400">
        Selected:{" "}
        <span className="text-cyan-400 font-medium">
          {colorSchemes.find((s) => s.id === value)?.name}
        </span>
      </p>
    </div>
  );
};

export default ColorSchemeSelector;