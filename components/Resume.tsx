"use client";

import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import { resume } from "@/data/site";

export default function Resume() {
  return (
    <section id="resume" className="section-pad border-t border-line">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-line bg-panel/60 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-data/15 flex items-center justify-center text-data">
              <FileText size={22} />
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-paper">Resume</h2>
              <p className="text-fog text-sm mt-1">The full story — experience, projects and skills in one page.</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={resume.fileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-line px-6 py-3 text-paper hover:border-data hover:text-data transition-colors"
            >
              View Resume
            </a>
            <a
              href={resume.fileUrl}
              download
              className="inline-flex items-center gap-2 justify-center rounded-full bg-data text-ink font-medium px-6 py-3 hover:brightness-110 transition"
            >
              <Download size={16} /> Download
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
