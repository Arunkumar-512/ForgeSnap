"use client";

import {
  Menu,
  X,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "motion/react";

import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { useAuth } from "../context/AuthContext.tsx";

export default function Navbar() {

  const {
    isLoggedIn,
    user,
    logout,
  } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Generate",
      href: "/generate",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (

    <>
      {/* NAVBAR */}
      <motion.header

        initial={{
          opacity: 0,
          y: -20,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 0.5,
        }}

        className="
          fixed left-0 top-0 z-50
          w-full
          px-4 pt-4
        "
      >

        <nav className="
          mx-auto
          flex h-[74px]
          max-w-7xl
          items-center justify-between
          rounded-[24px]
          border border-[var(--color-border)]
          bg-[rgba(255,255,255,0.72)]
          px-6
          shadow-[0_10px_40px_rgba(44,53,57,0.06)]
          backdrop-blur-xl
          md:px-8
        ">

          {/* LOGO */}
          <Link
            to="/"
            className="
              flex items-center gap-3
            "
          >

            <div className="
              flex h-11 w-11
              items-center justify-center
              rounded-2xl
              bg-[var(--color-dark)]
              text-white
              shadow-[0_10px_25px_rgba(143,168,155,0.18)]
            ">

              <span className="
                text-lg font-bold
              ">

                F
              </span>
            </div>

            <div>

              <h1 className="
                text-lg font-semibold
                tracking-[-0.03em]
                text-[var(--color-dark)]
              ">

                ForgeSnap
              </h1>

              <p className="
                text-xs
                text-[var(--color-text-muted)]
              ">

                AI Thumbnail Studio
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="
            hidden items-center gap-8
            md:flex
          ">

            {navLinks.map((item, index) => (

              <Link
                key={index}
                to={item.href}
                className="
                  text-[15px]
                  font-medium
                  text-[var(--color-text-muted)]
                  transition-colors duration-300
                  hover:text-[var(--color-dark)]
                "
              >

                {item.name}
              </Link>
            ))}

            {isLoggedIn ? (

              <Link
                to="/my-generation"
                className="
                  text-[15px]
                  font-medium
                  text-[var(--color-text-muted)]
                  transition-colors duration-300
                  hover:text-[var(--color-dark)]
                "
              >

                My Generations
              </Link>

            ) : (

              <Link
                to="/about"
                className="
                  text-[15px]
                  font-medium
                  text-[var(--color-text-muted)]
                  transition-colors duration-300
                  hover:text-[var(--color-dark)]
                "
              >

                About
              </Link>
            )}
          </div>

          {/* RIGHT */}
          <div className="
            flex items-center gap-3
          ">

            {isLoggedIn ? (

              <div className="
                flex items-center gap-3
              ">

                {/* AVATAR */}
                <div className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-2xl
                  bg-[var(--color-dark)]
                  text-sm font-semibold
                  text-white
                ">

                  {user?.name
                    ?.charAt(0)
                    .toUpperCase()}
                </div>

                {/* LOGOUT */}
                <button
                  onClick={() => logout()}
                  className="
                    hidden
                    text-sm font-medium
                    text-[var(--color-text-muted)]
                    transition-colors duration-300
                    hover:text-[var(--color-dark)]
                    md:block
                  "
                >

                  Logout
                </button>
              </div>

            ) : (

              <button
                onClick={() => navigate("/login")}
                className="
                  hidden
                  rounded-2xl
                  bg-[var(--color-dark)]
                  px-5 py-3
                  text-sm font-semibold
                  text-white
                  transition-all duration-300
                  hover:opacity-90
                  md:block
                "
              >

                Get Started
              </button>
            )}

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsOpen(true)}
              className="
                flex h-11 w-11
                items-center justify-center
                rounded-2xl
                border border-[var(--color-border)]
                bg-white/70
                text-[var(--color-dark)]
                md:hidden
              "
            >

              <Menu size={20} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {isOpen && (

          <>
            {/* BACKDROP */}
            <motion.div

              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}

              onClick={() => setIsOpen(false)}

              className="
                fixed inset-0 z-[90]
                bg-black/20
                backdrop-blur-sm
              "
            />

            {/* MENU */}
            <motion.div

              initial={{
                opacity: 0,
                y: 20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              exit={{
                opacity: 0,
                y: 20,
              }}

              transition={{
                duration: 0.25,
              }}

              className="
                fixed left-4 right-4 top-4 z-[100]
                overflow-hidden
                rounded-[32px]
                border border-[var(--color-border)]
                bg-[rgba(255,255,255,0.92)]
                p-6
                shadow-[0_20px_60px_rgba(44,53,57,0.10)]
                backdrop-blur-xl
              "
            >

              {/* TOP */}
              <div className="
                flex items-center justify-between
              ">

                <div>

                  <h2 className="
                    text-lg font-semibold
                    text-[var(--color-dark)]
                  ">

                    Navigation
                  </h2>

                  <p className="
                    mt-1 text-sm
                    text-[var(--color-text-muted)]
                  ">

                    Explore ForgeSnap
                  </p>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-2xl
                    bg-[var(--color-bg-secondary)]
                    text-[var(--color-dark)]
                  "
                >

                  <X size={18} />
                </button>
              </div>

              {/* LINKS */}
              <div className="
                mt-8
                space-y-3
              ">

                {navLinks.map((item, index) => (

                  <Link
                    key={index}
                    to={item.href}

                    onClick={() => setIsOpen(false)}

                    className="
                      flex items-center justify-between
                      rounded-2xl
                      border border-[var(--color-border)]
                      bg-white/70
                      px-5 py-4
                      text-[15px]
                      font-medium
                      text-[var(--color-dark)]
                    "
                  >

                    {item.name}

                    <span className="
                      text-[var(--color-text-muted)]
                    ">

                      →
                    </span>
                  </Link>
                ))}

                {isLoggedIn ? (

                  <Link
                    to="/my-generation"

                    onClick={() => setIsOpen(false)}

                    className="
                      flex items-center justify-between
                      rounded-2xl
                      border border-[var(--color-border)]
                      bg-white/70
                      px-5 py-4
                      text-[15px]
                      font-medium
                      text-[var(--color-dark)]
                    "
                  >

                    My Generations
                  </Link>

                ) : (

                  <Link
                    to="/about"

                    onClick={() => setIsOpen(false)}

                    className="
                      flex items-center justify-between
                      rounded-2xl
                      border border-[var(--color-border)]
                      bg-white/70
                      px-5 py-4
                      text-[15px]
                      font-medium
                      text-[var(--color-dark)]
                    "
                  >

                    About
                  </Link>
                )}
              </div>

              {/* AUTH */}
              <div className="mt-8">

                {isLoggedIn ? (

                  <button
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}

                    className="
                      w-full
                      rounded-2xl
                      bg-[var(--color-dark)]
                      py-4
                      text-sm font-semibold
                      text-white
                    "
                  >

                    Logout
                  </button>

                ) : (

                  <Link
                    to="/login"

                    onClick={() => setIsOpen(false)}

                    className="
                      block w-full
                      rounded-2xl
                      bg-[var(--color-dark)]
                      py-4
                      text-center
                      text-sm font-semibold
                      text-white
                    "
                  >

                    Login / Sign Up
                  </Link>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}