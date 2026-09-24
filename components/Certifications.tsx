"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, ExternalLink } from "lucide-react";
import { certificates, type Certificate } from "@/data/certificates";

export default function Certifications() {
  const [preview, setPreview] = useState<Certificate | null>(null);

  return (
    <section id="certifications" className="section-pad border-t border-line">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-paper">Certifications</h2>
          {/* <p className="mt-3 text-fog">
            Add a new certificate any time by editing <code className="text-xs text-insight">data/certificates.ts</code>.
          </p> */}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
              className="rounded-2xl border border-line bg-panel/60 overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[4/3] bg-panel2 flex items-center justify-center">
                {cert.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={cert.image} alt={cert.name} className="w-full h-full object-cover" />
                ) : (
                  <Award className="text-fog" size={28} />
                )}
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-paper font-medium leading-snug">{cert.name}</h3>
                <p className="text-sm text-fog mt-1">{cert.issuer}</p>
                <p className="text-xs text-fog/70 mt-1">{cert.date}</p>

                {cert.skills.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {cert.skills.map((s) => (
                      <span key={s} className="text-xs text-fog border border-line rounded-full px-2 py-0.5">
                        {s}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-auto pt-4 flex items-center gap-4">
                  <button
                    onClick={() => setPreview(cert)}
                    className="text-sm text-data hover:text-insight transition-colors"
                  >
                    View Certificate
                  </button>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-fog hover:text-paper transition-colors"
                    >
                      <ExternalLink size={14} /> Credential
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink/90 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setPreview(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full rounded-2xl border border-line bg-panel p-6"
            >
              <button
                aria-label="Close preview"
                onClick={() => setPreview(null)}
                className="absolute top-4 right-4 text-fog hover:text-paper"
              >
                <X size={20} />
              </button>

              <div className="aspect-[4/3] bg-panel2 rounded-xl flex items-center justify-center mb-5">
                {preview.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={preview.image} alt={preview.name} className="w-full h-full object-contain rounded-xl" />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-fog">
                    <Award size={28} />
                    <span className="text-xs">Add image in /public/certificates/</span>
                  </div>
                )}
              </div>

              <h3 className="text-paper text-lg font-medium">{preview.name}</h3>
              <p className="text-fog text-sm mt-1">
                {preview.issuer} — {preview.date}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
