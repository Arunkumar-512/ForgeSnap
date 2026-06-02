"use client";

import { footerData } from "../data/footer";

import {
  Dribbble,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

import { motion } from "motion/react";

import type { IFooterLink } from "../types";

import { Link } from "react-router-dom";

export default function Footer() {

  return (

    <footer className="
      relative overflow-hidden
      border-t border-[var(--color-border)]
      py-20
    ">

      {/* SOFT BACKGROUND */}
      <div className="
        absolute left-1/2 top-0
        h-[400px] w-[400px]
        -translate-x-1/2
        rounded-full
        bg-[rgba(143,168,155,0.06)]
        blur-[120px]
      " />

      <div className="
        container-custom
        relative z-10
      ">

        {/* TOP */}
        <div className="
          grid gap-14
          border-b border-[var(--color-border)]
          pb-14
          lg:grid-cols-[1fr_auto]
        ">

          {/* LEFT SIDE */}
          <motion.div

            initial={{
              opacity: 0,
              y: 20,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{ once: true }}

            transition={{
              duration: 0.5,
            }}
          >

            {/* LOGO */}
            <Link
              to="/"
              className="
                inline-flex items-center gap-3
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

                <img
                  src="/favicon.svg"
                  alt="ForgeSnap"
                  className="h-5 w-5"
                />
              </div>

              <div>

                <h3 className="
                  text-lg font-semibold
                  text-[var(--color-dark)]
                ">

                  ForgeSnap AI
                </h3>

                <p className="
                  text-sm
                  text-[var(--color-text-muted)]
                ">

                  AI thumbnail generation
                </p>
              </div>
            </Link>

            {/* DESCRIPTION */}
            <p className="
              mt-6
              max-w-md
              text-[15px]
              leading-relaxed
              text-[var(--color-text-muted)]
            ">

              Create modern, high-performing
              thumbnails faster using AI-powered
              layouts and optimized visual workflows
              built for creators.
            </p>

            {/* SOCIALS */}
            <div className="
              mt-8
              flex items-center gap-3
            ">

              {[
                Dribbble,
                Linkedin,
                Twitter,
                Youtube,
              ].map((Icon, index) => (

                <a
                  key={index}
                  href="#"
                  className="
                    flex h-11 w-11
                    items-center justify-center
                    rounded-2xl
                    border border-[var(--color-border)]
                    bg-white/60
                    text-[var(--color-text-muted)]
                    transition-all duration-300
                    hover:border-[var(--color-dark)]/30
                    hover:text-[var(--color-dark)]
                  "
                >

                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div

            initial={{
              opacity: 0,
              y: 20,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{ once: true }}

            transition={{
              duration: 0.5,
              delay: 0.1,
            }}

            className="
              grid gap-10
              sm:grid-cols-3
            "
          >

            {footerData.map((section, index) => (

              <div key={index}>

                {/* TITLE */}
                <h4 className="
                  text-sm font-semibold
                  uppercase tracking-[0.12em]
                  text-[var(--color-dark)]
                ">

                  {section.title}
                </h4>

                {/* LINKS */}
                <ul className="
                  mt-5
                  space-y-3
                ">

                  {section.links.map(
                    (
                      link: IFooterLink,
                      linkIndex: number
                    ) => (

                      <li key={linkIndex}>

                        <Link
                          to={link.href}
                          className="
                            text-[15px]
                            text-[var(--color-text-muted)]
                            transition-colors duration-300
                            hover:text-[var(--color-dark)]
                          "
                        >

                          {link.name}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        {/* BOTTOM */}
        <div className="
          flex flex-col gap-4
          pt-8
          text-sm
          text-[var(--color-text-muted)]
          md:flex-row md:items-center md:justify-between
        ">

          <p>
            © {new Date().getFullYear()} ForgeSnap AI.
            All rights reserved.
          </p>

          <div className="
            flex items-center gap-6
          ">

            <Link
              to="/privacy"
              className="
                transition-colors duration-300
                hover:text-[var(--color-dark)]
              "
            >

              Privacy
            </Link>

            <Link
              to="/terms"
              className="
                transition-colors duration-300
                hover:text-[var(--color-dark)]
              "
            >

              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}