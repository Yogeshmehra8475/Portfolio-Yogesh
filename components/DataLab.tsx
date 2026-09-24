"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { dataAiLab } from "@/data/skills";

export default function DataLab() {
  const [active, setActive] = useState(0);

  return (
    <section id="lab" className="section-pad border-t border-line">
      <div className="container-page">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-4xl font-semibold text-paper mb-3"
        >
          Data & AI Lab
        </motion.h2>
        <p className="text-fog mb-12 max-w-xl">Domains I work across, from raw data to deployed intelligence.</p>

        <div className="grid md:grid-cols-[0.4fr_0.6fr] gap-10">
          <div className="flex flex-col gap-2">
            {dataAiLab.map((d, i) => (
              <button
                key={d.title}
                onClick={() => setActive(i)}
                className={`text-left rounded-xl px-5 py-4 border transition-colors ${
                  active === i
                    ? "border-data bg-data/10 text-paper"
                    : "border-line text-fog hover:border-line hover:text-paper"
                }`}
              >
                {d.title}
              </button>
            ))}
          </div>

          <div className="rounded-2xl border border-line bg-panel/60 p-8 min-h-[220px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-paper text-xl font-medium mb-3">{dataAiLab[active].title}</h3>
                <p className="text-fog leading-relaxed">{dataAiLab[active].description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
