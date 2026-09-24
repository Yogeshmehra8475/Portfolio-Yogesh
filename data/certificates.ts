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
    date: "05/September/2026",
    skills: ["Data Science", "Generative AI"],
    image: "/certificates/ds-genai-pw.png",
    credentialUrl: "", // TODO: add certificate/credential link
  },
  {
    id: "genai-pw",
    name: "Generative AI",
    issuer: "Physics Wallah",
    date: "26/April/2026",
    skills: ["Generative AI"],
    image: "/certificates/genai-pw.png",
    credentialUrl: "",
  },
  {
    id: "fullstack-apna",
    name: "Full-Stack Web Development",
    issuer: "Apna College",
    date: "25/September/2025",
    skills: ["React", "Node.js", "Full-Stack Development"],
    image: "/certificates/fullstack-apna.png",
    credentialUrl: "",
  },
  {
    id: "dsa-java-apna",
    name: "DSA with Java",
    issuer: "Apna College",
    date: "18/January/2025",
    skills: ["DSA", "Java"],
    image: "/certificates/dsa-java-apna.png",
    credentialUrl: "",
  },
  {
    id: "cyber-cisco",
    name: "Cyber Security Essentials",
    issuer: "Cisco NetAcad",
    date: "TODO: add date",
    skills: ["Cyber Security"],
    image: "/certificates/ds-genai-pw.png",
    credentialUrl: "",
  },
  {
    id: "forage-genai",
    name: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Forage",
    date: "September 2026",
    skills: ["Generative AI", "Data Analytics", "Risk Profiling"],
    image: "/certificates/forage-genai.png",
    credentialUrl: "",
  },
  {
  id: "simplilearn-fullstack-101",
  name: "Full-Stack Development 101",
  issuer: "Simplilearn SkillUp",
  date: "July 2025",
  skills: ["Full-Stack Development", "Web Development", "Frontend Development", "Backend Development"],
  image: "/certificates/simplilearn-fullstack-101.png",
  credentialUrl: "",
},
  {
    id: "aicte-shell",
    name: "AI & Data Analytics Virtual Internship",
    issuer: "AICTE × Shell India Markets Pvt. Ltd. (Edunet Foundation, Skills4Future)",
    date: "April 2025",
    skills: ["Artificial Intelligence", "Data Analytics", "Green Skills"],
    image: "/certificates/aicte-shell.png",
    credentialUrl: "",
  },
];
