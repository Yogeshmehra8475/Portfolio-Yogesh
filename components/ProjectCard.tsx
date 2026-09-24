"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ImageIcon } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group rounded-2xl border border-line bg-panel/60 overflow-hidden hover:border-data/60 transition-colors"
    >
      <div className="relative aspect-[16/10] bg-panel2 flex items-center justify-center overflow-hidden">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.image} alt={`${project.title} screenshot`} className="w-full h-full object-cover" />
        ) : (
          <div className="flex flex-col items-center gap-2 text-fog">
            <ImageIcon size={22} />
            <span className="text-xs">Add a screenshot</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-paper font-medium text-lg">{project.title}</h3>
        <p className="mt-2 text-fog text-sm leading-relaxed">{project.description}</p>

        {project.tech.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="text-xs text-fog border border-line rounded-full px-2.5 py-1">
                {t}
              </span>
            ))}
          </div>
        )}

        {project.highlights.length > 0 && (
          <ul className="mt-4 space-y-1.5">
            {project.highlights.map((h, i) => (
              <li key={i} className="text-sm text-fog flex gap-2">
                <span className="text-data mt-1.5 w-1 h-1 rounded-full bg-data shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        {
          <p className="mt-4 text-xs text-insight/80"></p>
        }

        <div className="mt-5 flex items-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-fog hover:text-paper transition-colors"
            >
              <Github size={16} /> Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-fog hover:text-paper transition-colors"
            >
              <ExternalLink size={16} /> Live demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
