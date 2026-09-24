// ─────────────────────────────────────────────────────────────
// CERTIFICATIONS — add a new certificate by adding an object to
// this array. No other file needs to change.
//
// Fields:
//   image  → put the certificate image in /public/certificates/
//            and point to it, e.g. "/certificates/pw-genai.png".
//            Leave null for a placeholder tile.
//   date   → keep the "TODO" placeholders until you fill in the
//            real issue date — nothing was invented here.
// ─────────────────────────────────────────────────────────────

export type Certificate = {
  id: string;
  name: string;
  issuer: string;
  date: string;
  skills: string[];
  image: string | null;
  credentialUrl: string;
};

export const certificates: Certificate[] = [
  {
    id: "ds-genai-pw",
    name: "Data Science With Generative AI",
    issuer: "Physics Wallah",
    date: "TODO: add date",
    skills: ["Data Science", "Generative AI"],
    image: null, // TODO: add /public/certificates/ds-genai-pw.png
    credentialUrl: "", // TODO: add certificate/credential link
  },
  {
    id: "genai-pw",
    name: "Generative AI",
    issuer: "Physics Wallah",
    date: "TODO: add date",
    skills: ["Generative AI"],
    image: null,
    credentialUrl: "",
  },
  {
    id: "fullstack-apna",
    name: "Full-Stack Web Development",
    issuer: "Apna College",
    date: "TODO: add date",
    skills: ["React", "Node.js", "Full-Stack Development"],
    image: null,
    credentialUrl: "",
  },
  {
    id: "dsa-java-apna",
    name: "DSA with Java",
    issuer: "Apna College",
    date: "TODO: add date",
    skills: ["DSA", "Java"],
    image: null,
    credentialUrl: "",
  },
  {
    id: "cyber-cisco",
    name: "Cyber Security Essentials",
    issuer: "Cisco NetAcad",
    date: "TODO: add date",
    skills: ["Cyber Security"],
    image: null,
    credentialUrl: "",
  },
  {
    id: "aicte-shell",
    name: "AI & Data Analytics Virtual Internship",
    issuer: "AICTE × Shell India Markets Pvt. Ltd. (Edunet Foundation, Skills4Future)",
    date: "April 2025",
    skills: ["Artificial Intelligence", "Data Analytics", "Green Skills"],
    image: null,
    credentialUrl: "",
  },
  {
    id: "forage-genai",
    name: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Forage",
    date: "September 2026",
    skills: ["Generative AI", "Data Analytics", "Risk Profiling"],
    image: null,
    credentialUrl: "",
  },
];
