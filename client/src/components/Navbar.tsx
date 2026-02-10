import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.tsx";

export default function Navbar() {
  const { isLoggedIn, user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <motion.nav
        className="fixed top-0 z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur text-zinc-200"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
      >
        <Link to="/">
          <img src="/logo4.svg" alt="logo" className="h-23 w-45 pl-10" />
        </Link>

        <div className="hidden md:flex items-center gap-8 transition duration-500">
          <Link to="/" className="hover:text-indigo-400 transition">
            Home
          </Link>
          <Link to="/generate" className="hover:text-indigo-400 transition">
            Generate
          </Link>
          {isLoggedIn ? (
            <Link
              to="/my-generation"
              className="hover:text-indigo-400 transition"
            >
              My Generations
            </Link>
          ) : (
            <Link to="#" className="hover:text-indigo-400 transition">
              About
            </Link>
          )}
          <Link to="#" className="hover:text-indigo-400 transition">
            Contact us
          </Link>
        </div>

        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <div className="relative group">
              <button className="rounded-full size-7 bg-white/20 border-3 border-white/10 text-white">
                {user?.name.charAt(0).toUpperCase()}
              </button>
              <div className="absolute hidden group-hover:block top-5 right-0 pt-4">
                <button
                  onClick={() => logout()}
                  className="bg-white/20 border-2 border-white/10 px-5 py-1.5 rounded text-zinc-200 hover:text-indigo-400 transition"
                >
                  logout
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="hidden md:block px-6 py-2.5 bg-indigo-600 hover:bg-violet-600 active:scale-95 transition-all rounded-full text-white"
            >
              Get Started
            </button>
          )}

          <button onClick={() => setIsOpen(true)} className="md:hidden">
            <MenuIcon
              size={26}
              className="active:scale-90 transition text-zinc-200"
            />
          </button>
        </div>
      </motion.nav>

      <div
        className={`fixed inset-0 z-100 bg-black/40 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-400 text-zinc-200 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link onClick={() => setIsOpen(false)} to="/">
          Home
        </Link>
        <Link onClick={() => setIsOpen(false)} to="/generate">
          Generate
        </Link>

        {isLoggedIn ? (
          <Link onClick={() => setIsOpen(false)} to="/my-generation">
            My Generations
          </Link>
        ) : (
          <Link onClick={() => setIsOpen(false)} to="#">
            About
          </Link>
        )}

        <Link onClick={() => setIsOpen(false)} to="#">
          Contact us
        </Link>

        {isLoggedIn ? (
          <button
            onClick={() => {
              setIsOpen(false);
              logout();
            }}
            className="hover:text-indigo-400 transition"
          >
            logout
          </button>
        ) : (
          <Link onClick={() => setIsOpen(false)} to="/login">
            Login
          </Link>
        )}

        <button
          onClick={() => setIsOpen(false)}
          className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-indigo-600 hover:bg-violet-600 transition text-white rounded-md flex"
        >
          <XIcon />
        </button>
      </div>
    </>
  );
}
