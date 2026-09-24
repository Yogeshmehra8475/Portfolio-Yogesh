"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#lab", label: "AI Lab" },
  { href: "#certifications", label: "Certifications" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/85 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="container-page flex items-center justify-between h-16">
        <a href="#top" className="font-display font-semibold text-paper tracking-tight">
          Yogesh<span className="text-data">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-fog">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-paper transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${site.email}`}
          className="hidden md:inline-flex items-center rounded-full border border-line px-4 py-2 text-sm text-paper hover:border-data hover:text-data transition-colors"
        >
          Let&apos;s talk
        </a>

        <button
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          className="md:hidden text-paper"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-6 h-px bg-paper mb-1.5" />
          <span className="block w-6 h-px bg-paper mb-1.5" />
          <span className="block w-4 h-px bg-paper" />
        </button>
      </nav>

      {open && (
        <ul className="md:hidden container-page pb-6 flex flex-col gap-4 text-fog bg-ink/95 backdrop-blur-md border-b border-line">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-paper transition-colors" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
