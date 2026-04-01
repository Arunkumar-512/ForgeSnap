"use client";
import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.tsx";

export default function Navbar() {
  const { isLoggedIn, user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        className="fixed top-0 z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 
        bg-white/5 backdrop-blur-xl border-b border-white/10 text-gray-200"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 180, damping: 20 }}
      >
        {/* LOGO */}
       <Link to="/" className="group pl-6">
  <h1
    className="text-2xl sm:text-3xl font-bold 
    tracking-widest 
    text-emerald-400 
    transition-all duration-300 
    group-hover:scale-105 group-hover:text-cyan-400"
    style={{ fontFamily: '"Press Start 2P", system-ui', fontWeight: "900",fontStyle: "normal" }}
  >
    Snap<span className="text-cyan-400 group-hover:text-emerald-400">Forge</span>
  </h1>
</Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          {["Home", "Generate", "Contact us"].map((item, i) => (
            <Link
              key={i}
              to={
                item === "Home"
                  ? "/"
                  : item === "Generate"
                    ? "/generate"
                    : item === "About"
                      ? "/about"
                      : item === "Contact us"
                        ? "/contact"
                        : "#"
              }
              className="relative text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              {item}

              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {isLoggedIn ? (
            <Link
              to="/my-generation"
              className="text-gray-300 hover:text-cyan-400 transition"
            >
              My Generations
            </Link>
          ) : (
            <Link
              to="/about"
              className="text-gray-300 hover:text-cyan-400 transition"
            >
              About
            </Link>
          )}
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <div className="relative group">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="rounded-full size-8 bg-gradient-to-r from-emerald-400 to-cyan-500 text-black font-semibold"
              >
                {user?.name.charAt(0).toUpperCase()}
              </motion.button>

              {/* DROPDOWN */}
              <div className="absolute hidden group-hover:block top-10 right-0 pt-3">
                <button
                  onClick={() => logout()}
                  className="bg-white/5 border border-white/10 px-5 py-2 rounded-lg text-gray-300 hover:text-cyan-400 transition backdrop-blur-xl"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <motion.button
              onClick={() => navigate("/login")}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block px-6 py-2.5 rounded-full font-semibold
              bg-gradient-to-r from-emerald-400 to-cyan-500 text-black shadow-lg"
            >
              Get Started
            </motion.button>
          )}

          {/* MOBILE MENU BUTTON */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="md:hidden"
          >
            <MenuIcon size={26} className="text-gray-200" />
          </motion.button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* 🌫️ BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[99] bg-black/40 backdrop-blur-md"
            />

            {/* 🍎 GLASS SHEET */}
            <motion.div
              initial={{ y: "100%", scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: "100%", scale: 0.98 }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 30,
              }}
              className="fixed bottom-0 left-0 right-0 z-[100] 
        rounded-t-[2.5rem] bg-white/5 backdrop-blur-3xl 
        border-t border-white/10 px-6 pt-6 pb-10 shadow-2xl"
            >
              {/* 🔘 DRAG HANDLE */}
              <div className="w-14 h-1.5 bg-white/20 rounded-full mx-auto mb-6" />

              {/* 📱 MENU ITEMS */}
              <div className="flex flex-col gap-4">
                {["Home", "Generate", "Contact us"].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{
                      delay: i * 0.06,
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    <Link
                      onClick={() => setIsOpen(false)}
                      to={
                        item === "Home"
                          ? "/"
                          : item === "Generate"
                            ? "/generate"
                            : "/contact"
                      }
                      className="flex items-center justify-between 
                px-5 py-4 rounded-2xl 
                bg-white/5 border border-white/10
                text-white/90 hover:bg-white/10 
                active:scale-[0.98] transition-all"
                    >
                      {item}
                      <span className="text-white/40">›</span>
                    </Link>
                  </motion.div>
                ))}

                {/* AUTH */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {isLoggedIn ? (
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        logout();
                      }}
                      className="w-full mt-2 py-4 rounded-2xl 
                bg-white/5 border border-white/10 
                hover:bg-white/10 active:scale-[0.98] transition"
                    >
                      Logout
                    </button>
                  ) : (
                    <Link
                      onClick={() => setIsOpen(false)}
                      to="/login"
                      className="block text-center mt-2 py-4 rounded-2xl 
                bg-gradient-to-r from-indigo-400 to-cyan-400 
                text-black font-semibold active:scale-[0.98] transition"
                    >
                      Login / Sign Up
                    </Link>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
