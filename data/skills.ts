
export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Python", "Java", "JavaScript"],
  },
  {
    title: "Data Science",
    items: ["NumPy", "Pandas", "Matplotlib", "Statistics", "EDA", "Data Preprocessing"],
  },
  {
    title: "AI & Machine Learning",
    items: ["Scikit-learn", "TensorFlow", "Deep Learning", "NLP", "Computer Vision", "YOLOv8"],
  },
  {
    title: "Development",
    items: ["React", "Next.js", "Node.js", "Express", "REST APIs"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman"],
  },
  {
    title: "Core CS Concepts",
    items: ["DSA", "OOP", "DBMS", "OS", "Computer Networks"],
  },
];

export type LabDomain = {
  title: string;
  description: string;
};

export const dataAiLab: LabDomain[] = [
  {
    title: "Data Analytics",
    description: "Exploratory data analysis, statistical analysis and data preprocessing with Pandas and NumPy.",
  },
  {
    title: "Machine Learning",
    description: "Model building and evaluation with Scikit-learn across classification and prediction tasks.",
  },
  {
    title: "Computer Vision",
    description: "Real-time object detection with YOLOv8 and OpenCV, from training to deployment.",
  },
  {
    title: "NLP",
    description: "Working with language models and text data as part of deep learning coursework and projects.",
  },
  {
    title: "Generative AI",
    description: "Building with LLM APIs (Gemini) for content generation inside full-stack applications.",
  },
  {
    title: "Data Visualization",
    description: "Communicating findings clearly with Matplotlib and business-facing reporting.",
  },
];
