"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { site, socialLinks } from "@/data/site";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent(
    `Portfolio contact from ${name || "your site"}`
  )}&body=${encodeURIComponent(`${message}\n\n— ${name}${email ? ` (${email})` : ""}`)}`;

  return (
    <section id="contact" className="section-pad border-t border-line">
      <div className="container-page grid md:grid-cols-[0.45fr_0.55fr] gap-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-paper mb-4">Contact</h2>
          <p className="text-fog leading-relaxed max-w-sm">
            Open to Data Scientist, Data Analyst and Machine Learning roles. The fastest way to reach me is email.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <a href={socialLinks.email} className="inline-flex items-center gap-3 text-fog hover:text-paper transition-colors">
              <Mail size={18} /> {site.email}
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-fog hover:text-paper transition-colors">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href={socialLinks.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-fog hover:text-paper transition-colors">
              <Github size={18} /> GitHub
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
          // NOTE: this form opens the visitor's email client via a mailto link —
          // no backend or third-party service required. If you'd rather receive
          // submissions directly (e.g. via Formspree or Resend), swap the
          // onSubmit handler below for a fetch() call to that service.
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = mailtoHref;
          }}
        >
          <div>
            <label htmlFor="name" className="text-sm text-fog block mb-1.5">
              Name
            </label>
            <input
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl bg-panel border border-line px-4 py-3 text-paper placeholder:text-fog/50 focus:border-data outline-none"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm text-fog block mb-1.5">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl bg-panel border border-line px-4 py-3 text-paper placeholder:text-fog/50 focus:border-data outline-none"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm text-fog block mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-xl bg-panel border border-line px-4 py-3 text-paper placeholder:text-fog/50 focus:border-data outline-none resize-none"
              placeholder="What would you like to talk about?"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-data text-ink font-medium px-6 py-3 hover:brightness-110 transition"
          >
            Send message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
