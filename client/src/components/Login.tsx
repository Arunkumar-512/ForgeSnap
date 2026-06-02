"use client";

import React, { useEffect, useState } from "react";
import SoftBackDrop from "./SoftBackDrop";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Lock, User, ArrowRight, Sparkles, ChevronRight, Loader2 } from "lucide-react";
import { InputField } from "./InputField";

const Login = () => {
  const [state, setState] = useState<"login" | "register">("login");
  const [loading, setLoading] = useState(false); // Added loading state for better UX
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (state === "login") {
        await login({ email: formData.email, password: formData.password });
      } else {
        await signUp(formData);
      }
      // Redirect happens automatically via useEffect
    } catch (error) {
      // Error is already handled by toast in AuthContext
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  return (
    <section className="relative overflow-hidden bg-[var(--color-bg)] px-5 py-12">
      <SoftBackDrop />
      {/* ... (Keep your existing background divs here) ... */}

      <div className="container-custom relative z-10 grid min-h-screen items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        
        {/* LEFT CONTENT (Same as your code) */}
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="w-full">
          <div className="relative overflow-hidden rounded-[36px] border border-[var(--color-border)] bg-white/70 p-8 shadow-[0_20px_60px_rgba(44,53,57,0.08)] backdrop-blur-xl md:p-10">
            
            {/* HEADER */}
            <div className="relative z-10">
              <h2 className="mt-6 text-3xl font-bold tracking-[-0.03em] text-[var(--color-dark)]">
                {state === "login" ? "Welcome back" : "Create account"}
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="relative z-10 mt-10 space-y-5">
              <AnimatePresence>
                {state === "register" && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                    <InputField icon={<User size={18} />} name="name" placeholder="Full name" value={formData.name} onChange={handleChange} />
                  </motion.div>
                )}
              </AnimatePresence>

              <InputField icon={<Mail size={18} />} name="email" type="email" placeholder="Email address" value={formData.email} onChange={handleChange} />
              <InputField icon={<Lock size={18} />} name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} />

              <button
                type="submit"
                disabled={loading}
                className="group mt-3 flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-[var(--color-dark)] text-[15px] font-semibold text-white transition-all hover:opacity-90 disabled:opacity-50"
              >
                {loading ? <Loader2 className="animate-spin" /> : (state === "login" ? "Sign In" : "Create Account")}
                {!loading && <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />}
              </button>
            </form>

            <div className="relative z-10 mt-8 text-center">
              <p className="text-sm text-[var(--color-text-muted)]">
                {state === "login" ? "New here?" : "Already have an account?"}
                <button type="button" onClick={() => setState(s => s === "login" ? "register" : "login")} className="ml-2 font-semibold text-[var(--color-dark)]">
                  {state === "login" ? "Create account" : "Login"}
                </button>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Login;