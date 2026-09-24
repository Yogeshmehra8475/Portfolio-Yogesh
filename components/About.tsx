"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="section-pad border-t border-line">
      <div className="container-page grid md:grid-cols-[0.4fr_0.6fr] gap-12">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl font-semibold text-paper"
          >
            About
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8"
          >
            <img
              src="/projects/profile.png"
              alt="Yogesh Singh Mehra"
              className="w-48 h-48 sm:w-56 sm:h-56 object-cover rounded-2xl border border-line"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl space-y-5"
        >
          {site.about.map((p, i) => (
            <p key={i} className="text-fog leading-relaxed text-base sm:text-lg">
              {p}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}