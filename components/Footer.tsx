import { Github, Linkedin, Mail } from "lucide-react";
import { site, socialLinks } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-fog">
          © {new Date().getFullYear()} {site.name}. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-5 text-fog">
          <a href={socialLinks.email} aria-label="Email" className="hover:text-paper transition-colors">
            <Mail size={18} />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-paper transition-colors">
            <Linkedin size={18} />
          </a>
          <a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-paper transition-colors">
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
