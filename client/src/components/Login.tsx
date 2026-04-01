"use client";
import React, { useEffect, useState } from "react";
import SoftBackDrop from "./SoftBackDrop";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  Lock,
  User,
  ArrowRight,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const Login = () => {
  const [state, setState] = useState<"login" | "register">("login");
  const { user, login, signUp } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state === "login") login(formData);
    else signUp(formData);
  };

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#030712] px-4 overflow-hidden">
      <SoftBackDrop />

      {/* background blur */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[140px] rounded-full -z-10" />

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-[420px]"
      >
        <motion.form
          onSubmit={handleSubmit}
          initial={{ scale: 0.96 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.8)]"
        >
          {/* HEADER */}
          <div className="text-center mb-10">
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="inline-flex items-center justify-center size-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-6"
            >
              <Sparkles size={22} />
            </motion.div>

            <h1 className="text-white text-3xl font-bold">
              {state === "login" ? "Welcome back" : "Create account"}
            </h1>

            <p className="text-slate-400 text-sm mt-2">
              {state === "login"
                ? "Enter your credentials to continue"
                : "Start creating AI thumbnails"}
            </p>
          </div>

          {/* INPUTS */}
          <div className="space-y-5">
            <AnimatePresence>
              {state === "register" && (
                <motion.div
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                >
                  <InputField
                    icon={<User />}
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <InputField
              icon={<Mail />}
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
            />

            <InputField
              icon={<Lock />}
              name="password"
              placeholder="Password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="relative w-full h-13 mt-8 rounded-2xl font-semibold text-black overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {state === "login" ? "Sign In" : "Create Account"}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </span>

            {/* gradient bg */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-300 to-white" />

            {/* shimmer */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
              <div className="absolute -left-full top-0 h-full w-1/2 bg-white/40 blur-xl group-hover:left-full transition-all duration-700" />
            </div>
          </motion.button>

          {/* TOGGLE */}
          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm">
              {state === "login"
                ? "New here?"
                : "Already have an account?"}
              <button
                type="button"
                onClick={() =>
                  setState((prev) =>
                    prev === "login" ? "register" : "login"
                  )
                }
                className="ml-2 text-white hover:text-indigo-400 font-medium inline-flex items-center gap-1"
              >
                {state === "login" ? "Sign up" : "Login"}
                <ChevronRight size={14} />
              </button>
            </p>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
};

/* 🔹 Reusable Input */
const InputField = ({
  icon,
  name,
  placeholder,
  value,
  onChange,
  type = "text",
}: any) => (
  <div className="relative group">
    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-400 transition">
      {icon}
    </div>

    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      className="w-full h-13 pl-12 pr-4 bg-white/[0.05] border border-white/10 rounded-2xl text-white placeholder-slate-500 outline-none 
      focus:border-indigo-500/60 focus:bg-white/[0.08] transition-all duration-300"
    />
  </div>
);

export default Login;