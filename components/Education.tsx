"use client";

import { motion } from "framer-motion";
import { education, currentlyExploring } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="section-pad border-t border-line">
      <div className="container-page grid md:grid-cols-2 gap-16">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl font-semibold text-paper mb-10"
          >
            Education
          </motion.h2>

          <div className="space-y-6">
            {education.map((ed, i) => (
              <motion.div
                key={ed.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-line bg-panel/60 p-6"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-paper font-medium">{ed.degree}</h3>
                  <span className="text-sm text-fog shrink-0">{ed.period}</span>
                </div>
                <p className="text-sm text-fog mt-2">{ed.institution}</p>
                {ed.detail && <p className="text-sm text-insight mt-1">{ed.detail}</p>}
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl sm:text-4xl font-semibold text-paper mb-10"
          >
            Currently Exploring
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-3"
          >
            {currentlyExploring.map((item) => (
              <span
                key={item}
                className="text-sm text-paper border border-line rounded-full px-4 py-2 hover:border-insight hover:text-insight transition-colors"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
