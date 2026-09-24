
export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  image: string | null;
  github: string;
  demo: string;
};

export const projects: Project[] = [
  {
    slug: "blood-bank-management-system",
    title: "Blood Bank Management System",
    description:
      "A web-based platform for blood donor registration, blood requests and inventory management, built with secure authentication and role-based access for donors and administrators.",
    tech: ["React.js", "Next.js", "PostgreSQL", "Clerk", "REST APIs"],
    highlights: [
      "Location-based donor discovery with database integration for better donor matching, integrated only for Uttarakhand",
      "Role-based access control for donor and administrator experiences",
      "Secure authentication end to end",
    ],
    image: "/projects/blood-bank.png",
    github: "https://github.com/Yogeshmehra8475/Blood-Bank",
    demo: "https://blood-bank-omega-five.vercel.app/", 
  },
  {
    slug: "quickblog-ai",
    title: "QuickBlog — AI-Powered Blogging Platform",
    description:
      "A full-stack blogging platform with authentication, content management and image uploads, using the Gemini API for AI-powered blog generation.",
    tech: ["React", "Express.js", "MongoDB", "Gemini API"],
    highlights: [
      "Gemini API integration for AI-assisted blog generation",
      "REST APIs backed by MongoDB",
      "Authentication and content management built in",
    ],
    image: "/projects/quickblog.png",
    github: "https://github.com/Yogeshmehra8475/QuickBlog-App",
    demo: "https://quick-blog-app-nine.vercel.app/",
  },
  {
    slug: "helmet-detection-yolov8",
    title: "Helmet Detection Using YOLOv8",
    description:
      "A real-time helmet detection system for traffic scenarios, built on the YOLOv8 object detection model and evaluated on annotated datasets.",
    tech: ["Python", "YOLOv8", "OpenCV", "Deep Learning"],
    highlights: [
      "Trained and evaluated on annotated datasets to improve detection accuracy",
      "OpenCV integration for image processing and object localization",
      "Built for efficient real-time safety monitoring",
    ],
    image: "/projects/helmet-detection.png",
    github: "",
    demo: "",
  },
  {
    slug: "phishing-website-detection",
  title: "Phishing Website Detection",
  description:
    "A machine learning-based web application that analyzes website URLs and detects whether they are legitimate or potentially phishing websites, helping users identify malicious links and stay safe online.",
  tech: [
    "Python","Pandas","NumPy","Scikit-learn","Machine Learning","Random Forest","Streamlit"
  ],
  highlights: [
    "Developed an ML-based phishing URL classification system using URL and website features.",
    "Trained and evaluated a Random Forest classifier to identify legitimate and phishing websites.",
    "Built an interactive interface for users to enter a URL and receive real-time phishing detection results."
  ],
    image: "/projects/phishing-website.png",
    github: "",
    demo: "",
  },
  {
  slug: "spam-detection",
  title: "Spam Detection",
  description:
    "A machine learning-based text classification system that identifies spam messages and separates them from legitimate messages, helping users detect unwanted and potentially harmful content.",
  tech: [
    "Python", "Pandas", "NumPy", "Scikit-learn", "Natural Language Processing", "Machine Learning", "Naive Bayes"
  ],
  highlights: [
    "Built an NLP-based classification model to detect spam messages from text.",
    "Applied text preprocessing and feature extraction techniques to improve classification.",
    "Evaluated the model using accuracy, precision, recall, and F1-score."
  ],
    image: "projects/spam-detection.png",
    github: "",
    demo: "",
  },
  {
  slug: "climate-visibility",
  title: "Climate Visibility",
  description:
    "A data-driven environmental monitoring application that provides insights into air quality, weather conditions, pollutants, and climate-related data to help users better understand their surrounding environment.",

  tech: ["Python","Pandas","NumPy","Matplotlib","Data Visualization","Machine Learning","API Integration"],
  highlights: [
    "Visualized environmental data including AQI, temperature, humidity, CO₂, and major air pollutants.",
    "Built interactive dashboards and charts to monitor air-quality trends and weather conditions.",
    "Provided location-based environmental insights to help users understand changing climate conditions."
  ],
    image: "projects/climate-visibility.png",
    github: "",
    demo: "",
  },
  {
  slug: "myntra-review-analysis",
  title: "Myntra Review Analysis",
  description:
    "A data analysis and visualization project that analyzes customer reviews from Myntra to identify customer sentiment, review patterns, and product feedback, helping uncover useful insights from user opinions.",
  tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Natural Language Processing", "Data Visualization"],
  highlights: [
    "Collected and analyzed Myntra customer reviews to identify sentiment and recurring feedback patterns.",
    "Performed data cleaning, preprocessing, exploratory analysis, and visualization on review data.",
    "Extracted actionable insights from customer opinions to understand product satisfaction and common concerns."
  ],
  image: null,
  github: "",
  demo: "",
},
 {
  slug: "lung-disease-diagnosis",
  title: "Lung Disease Diagnosis",
  description:
    "A machine learning-based diagnostic system that analyzes medical data and lung-related features to predict the likelihood of lung disease, supporting early detection and data-driven clinical assessment.",
  tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Machine Learning", "Data Preprocessing", "Data Visualization"],
  highlights: [
    "Built a machine learning model to classify and predict potential lung disease cases.",
    "Performed data preprocessing, feature analysis, and model evaluation to improve prediction reliability.",
    "Used classification metrics to evaluate model performance and generate interpretable diagnostic predictions."
  ],
  image: null,
  github: "",
  demo: "",
},
  {
  slug: "zerodha-clone",
  title: "Zerodha Clone",
  description:
    "A responsive stock trading platform clone inspired by Zerodha, designed to replicate the core interface and user experience of a modern online trading application.",
  tech: ["React.js", "JavaScript", "HTML", "CSS", "MongoDB", "Node.js", "Express.js"],
  highlights: [
    "Built a responsive trading dashboard with stock listings, portfolio views, and market information.",
    "Implemented user-focused interfaces inspired by real-world online trading platforms.",
    "Developed reusable components and structured the application for a smooth and scalable user experience."],
  image: "/projects/zerodha-clone.png",
  github: "",
  demo: "",
}
]