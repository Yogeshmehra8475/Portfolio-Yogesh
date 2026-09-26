// ─────────────────────────────────────────────────────────────
// EDUCATION
// ─────────────────────────────────────────────────────────────

export type EducationItem = {
  id: string;
  degree: string;
  institution: string;
  period: string;
  detail?: string;
};

export const education: EducationItem[] = [
  {
    id: "btech",
    degree: "B.Tech in Computer Science Engineering",
    institution: "Nanhi Pari Seemant Engineering Institute (NPSEI), Pithoragarh — Veer Madho Singh Bhandari Uttarakhand Technical University",
    period: "2026",
    detail: "CGPA: 7",
  },
  {
    id: "class-xii",
    degree: "Class XII, CBSE",
    institution: "Udayan International School, Champawat",
    period: "2022",
    detail: "62.4%",
  },
  {
    id: "class-x",
    degree: "Class X, CBSE",
    institution: "Udayan International School, Champawat",
    period: "2020",
    detail: "84.6%",
  },
];

export const currentlyExploring: string[] = [
  "Data Science",
  "Artificial Intelligence",
  "Data Analytics",
  "Deep Learning",
  "Large Language Models",
  "Advanced Machine Learning",
  "MLOps",
  "Generative AI",
  "Cloud",
];
