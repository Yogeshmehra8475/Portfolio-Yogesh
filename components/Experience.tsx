"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section-pad border-t border-line">
      <div className="container-page">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-4xl font-semibold text-paper mb-12"
        >
          Experience
        </motion.h2>

        <div className="relative pl-8 border-l border-line space-y-10 max-w-2xl">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-[2.05rem] top-1.5 w-2.5 h-2.5 rounded-full bg-data" />
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-paper font-medium">{exp.role}</h3>
                {exp.isVirtual && (
                  <span className="text-xs text-insight border border-insight/40 rounded-full px-2 py-0.5">
                    Virtual
                  </span>
                )}
              </div>
              <p className="text-sm text-fog mt-1">
                {exp.org} · {exp.period}
              </p>
              <ul className="mt-3 space-y-1.5">
                {exp.points.map((pt, j) => (
                  <li key={j} className="text-sm text-fog flex gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-data shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
