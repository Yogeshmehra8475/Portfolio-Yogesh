
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
    credentialUrl: "https://pwskills.com/learn/certificate/c44450c8-8f2a-415d-b32b-6108978953cf/?isCareerPath=true", 
  },
  {
    id: "genai-pw",
    name: "Generative AI",
    issuer: "Physics Wallah",
    date: "26/April/2026",
    skills: ["Generative AI"],
    image: "/certificates/genai-pw.png",
    credentialUrl: "https://pwskills.com/learn/certificate/333c11c9-adf0-46fb-876a-253233243144/",
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
    date: "04/July/2023",
    skills: ["Cyber Security"],
    image: "/certificates/Cyber_security_essentials.png",
    credentialUrl: "https://www.netacad.com/certificates/?issuanceId=1824a61b-ad67-4f98-bce7-579becac34cf",
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
  date: "20/July/2025",
  skills: ["Full-Stack Development", "Web Development", "Frontend Development", "Backend Development"],
  image: "/certificates/simplilearn-fullstack-101.png",
  credentialUrl: "https://lms.simplilearn.com/courses/6075/Full-Stack%20Development%20101/certificate/download-skillup",
},
{
  id: "cisco-introduction-cybersecurity",
  name: "Introduction to Cybersecurity",
  issuer: "Cisco Networking Academy",
  date: "04 July 2023",
  skills: ["Cybersecurity","Network Security","Security Fundamentals"],
  image: "/certificates/Introduction_to_cybersecurity.png",
  credentialUrl: "https://www.netacad.com/certificates/?issuanceId=80ab10a4-6f9b-4734-8474-03699499f3af",
},

{
  id: "cisco-introduction-packet-tracer",
  name: "Introduction to Packet Tracer",
  issuer: "Cisco Networking Academy",
  date: "04 July 2023",
  skills: ["Cisco Packet Tracer","Networking","Network Simulation"],
  image: "/certificates/Introduction_to_packet_tracer.png",
  credentialUrl: "https://www.netacad.com/certificates/?issuanceId=7e584926-2946-4c5e-bf77-bf1c4a53817d",
},

{
  id: "cisco-partner-cloud-security",
  name: "Partner: Cloud Security",
  issuer: "Cisco Networking Academy",
  date: "05 July 2023",
  skills: ["Cloud Security","Cybersecurity","Security Fundamentals"],
  image: "/certificates/Partner_cloud_security.png",
  credentialUrl: "https://www.netacad.com/certificates/?issuanceId=272877d9-82cf-4c9b-a473-6c61363b8778",
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
