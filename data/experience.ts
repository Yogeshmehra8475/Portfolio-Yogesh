
export type Experience = {
  id: string;
  role: string;
  org: string;
  period: string;
  isVirtual: boolean;
  points: string[];
};

export const experience: Experience[] = [
  {
    id: "forage-genai",
    role: "GenAI Powered Data Analytics Job Simulation",
    org: "Forage",
    period: "September 2026",
    isVirtual: true,
    points: [
      "Performed exploratory data analysis, risk profiling and delinquency prediction using AI-driven approaches.",
      "Created business reports and data storytelling to support an AI-driven collections strategy.",
    ],
  },
  {
    id: "edunet-aicte-shell",
    role: "Artificial Intelligence & Data Analytics Intern",
    org: "Edunet Foundation — Skills4Future Program, AICTE × Shell India Markets Pvt. Ltd.",
    period: "April 2025",
    isVirtual: true,
    points: [
      "Completed a 4-week virtual internship focused on Artificial Intelligence and Data Analytics with an emphasis on Green Skills.",
      "Gained practical exposure to AI and data analytics through the Skills4Future program.",
    ],
  },
];
