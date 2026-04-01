"use client";
import { footerData } from "../data/footer";
import {
  DribbbleIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import { motion } from "motion/react";
import type { IFooterLink } from "../types";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative flex flex-wrap justify-center md:justify-between overflow-hidden gap-10 md:gap-20 mt-40 py-10 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] bg-[#06070d] text-gray-400">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,255,200,0.06),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(34,211,238,0.08),transparent_40%)]"></div>
      <div className="absolute inset-0 backdrop-blur-[60px]" />

      {/* LEFT SECTION */}
      <motion.div
        className="relative z-10 flex flex-wrap items-start gap-10 md:gap-32"
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 180, damping: 20 }}
      >
        <Link to="/" className="group">
          <img
            className="size-9 aspect-square transition-transform duration-300 group-hover:scale-110"
            src="/favicon.svg"
            alt="footer logo"
          />
        </Link>

        {footerData.map((section, index) => (
          <div key={index}>
            <p className="text-white font-semibold">{section.title}</p>

            <ul className="mt-3 space-y-2">
              {section.links.map((link: IFooterLink, index: number) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="hover:text-cyan-400 transition duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>

      {/* RIGHT SECTION */}
      <motion.div
        className="relative z-10 flex flex-col max-md:items-center max-md:text-center gap-3 items-end"
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 180, damping: 20 }}
      >
        <p className="max-w-60 text-gray-400 leading-relaxed">
          Turn your ideas into high-performing thumbnails that capture attention
          and drive real clicks.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-4 mt-3">
          <a href="#" target="_blank" rel="noreferrer">
            <DribbbleIcon className="size-5 hover:text-emerald-400 hover:scale-110 transition" />
          </a>

          <a href="#" target="_blank" rel="noreferrer">
            <LinkedinIcon className="size-5 hover:text-cyan-400 hover:scale-110 transition" />
          </a>

          <a href="#" target="_blank" rel="noreferrer">
            <TwitterIcon className="size-5 hover:text-cyan-400 hover:scale-110 transition" />
          </a>

          <a href="#" target="_blank" rel="noreferrer">
            <YoutubeIcon className="size-6 hover:text-emerald-400 hover:scale-110 transition" />
          </a>
        </div>

        {/* COPYRIGHT */}
        <p className="mt-4 text-gray-500 text-center">
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="#"
            className="hover:text-cyan-400 transition duration-300"
          >
            ForgeSnap AI
          </a>
        </p>
      </motion.div>
    </footer>
  );
}