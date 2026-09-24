"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { site, socialLinks, resume } from "@/data/site";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden grid-backdrop">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />
      <div className="pointer-events-none absolute -top-40 -left-40 w-[32rem] h-[32rem] rounded-full bg-data/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-20 -right-20 w-[28rem] h-[28rem] rounded-full bg-insight/10 blur-[120px]" />

      <div className="container-page relative pt-40 pb-24 md:pt-48 md:pb-32 grid md:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-fog text-sm mb-5">{site.role}</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] text-paper">
            {site.name}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-fog max-w-xl leading-relaxed">
            {site.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-data text-ink font-medium px-6 py-3 hover:brightness-110 transition"
            >
              Explore Projects
            </a>
            <a
              href={resume.fileUrl}
              download
              className="inline-flex items-center justify-center rounded-full border border-line px-6 py-3 text-paper hover:border-insight hover:text-insight transition"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5 text-fog">
            <a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-paper transition-colors">
              <Github size={20} />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-paper transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={socialLinks.email} aria-label="Email" className="hover:text-paper transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="animate-drift"
        >
          <HeroVisual />
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-fog hover:text-paper transition-colors"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
