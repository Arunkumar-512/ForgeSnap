import React from "react";

const SoftBackDrop = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Base Cool Background Tint */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-br
          from-indigo-950
          via-black
          to-violet-950
        "
      />

      {/* Center Brand Glow (behind UI) */}
      <div
        className="
          absolute
          left-1/2 top-1/3
          -translate-x-1/2 -translate-y-1/2
          w-[42rem] h-[22rem]
          bg-gradient-to-r
          from-indigo-600/40
          via-violet-500/30
          to-transparent
          rounded-full
          blur-3xl
        "
      />

      {/* Top Accent Glow */}
      <div
        className="
          absolute
          left-1/2 top-10
          -translate-x-1/2
          w-[36rem] h-[16rem]
          bg-gradient-to-tr
          from-violet-500/30
          via-cyan-400/20
          to-transparent
          rounded-full
          blur-3xl
        "
      />

      {/* Bottom Ambient Glow */}
      <div
        className="
          absolute
          right-10 bottom-10
          w-[28rem] h-[16rem]
          bg-gradient-to-bl
          from-indigo-600/30
          via-cyan-500/20
          to-transparent
          rounded-full
          blur-2xl
        "
      />
    </div>
  );
};

export default SoftBackDrop;
