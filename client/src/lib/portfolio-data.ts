import { i } from "node_modules/vite/dist/node/types.d-aGj9QkWt";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaMicrosoft,
  FaDatabase,
  FaJava,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaAws,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";

import {
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
  SiMysql,
  SiJest,
  SiPostgresql,
  SiVercel,
  SiNetlify,
  SiRedux,
  SiBootstrap,
  SiGraphql,
  SiNextdotjs,
  SiJira,
  SiExpo,
  SiSwagger,
  SiPostman,
  SiSqlite,
  SiTestinglibrary,
} from "react-icons/si";
import { FaTerminal } from "react-icons/fa"; // Best Bash alternative
import { TbBrandVscode } from "react-icons/tb"; // From Tabler Icons


export const portfolioData = {
  personal: {
    name: "Mitkumar Patel",
    title: "Software Developer",
    location: "Windsor, ON, Canada",
    email: "patel77b@uwindsor.ca",
    phone: "+1 437 599 8642",
    github: "https://github.com/mitkumar",
    linkedin: "https://linkedin.com/in/mitkumar",
  },

  summary:
    "Software Developer with hands-on experience in React Native, MERN stack, cloud platforms (Azure), and DevOps pipelines (CI/CD, GitHub Actions). Adept at writing scalable code, automating workflows, and delivering end-to-end solutions. Passionate about agile teamwork, code quality, and solving real-world challenges using modern tech like Docker, RESTful APIs, and Firebase.",

  skills: {
    frontend: [
      { name: "React.js / React Native", level: 90 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "Redux / State Management", level: 80 },
      { name: "HTML5 / CSS3 / Tailwind", level: 88 },
    ],
    backend: [
      { name: "Node.js / Express.js", level: 85 },
      { name: "MongoDB / MySQL", level: 80 },
      { name: "Microsoft Azure", level: 75 },
      { name: "Docker / CI/CD", level: 70 },
    ],
    languages: ["JavaScript (ES6+)", "Python", "Java", "C++"],

    technologies: [
      // Languages
      { name: "JavaScript", icon: FaJsSquare, color: "text-yellow-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      { name: "Python", icon: FaPython, color: "text-yellow-300" },
      { name: "Java", icon: FaJava, color: "text-red-500" },
      { name: "C++", icon: FaDatabase, color: "text-indigo-400" },
      { name: "SQL", icon: SiPostgresql, color: "text-blue-500" },
      { name: "Bash", icon: FaTerminal, color: "text-gray-500" },


      // Frontend
      { name: "React", icon: FaReact, color: "text-sky-500" },
      { name: "Redux", icon: SiRedux, color: "text-purple-600" },
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
      { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-700" },

      // Backend & APIs
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express.js", icon: FaNodeJs, color: "text-gray-800" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500" },
      

      // Mobile
      { name: "React Native", icon: FaReact, color: "text-cyan-400" },
      { name: "Expo", icon: SiExpo, color: "text-black" },

      // Databases
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
      { name: "Firebase", icon: SiFirebase, color: "text-yellow-400" },
      { name: "SQLite", icon: SiSqlite, color: "text-gray-500" },

      // DevOps & Tools
      { name: "Docker", icon: FaDocker, color: "text-blue-500" },
      { name: "GitHub Actions", icon: FaGitAlt, color: "text-black" },
      { name: "Azure", icon: FaMicrosoft, color: "text-blue-700" },
      { name: "AWS", icon: FaAws, color: "text-orange-500" },
      { name: "Linux", icon: FaLinux, color: "text-gray-600" },

      // Testing & Agile
      { name: "Jira", icon: SiJira, color: "text-blue-500" },

      // Misc
      { name: "VS Code", icon: TbBrandVscode, color: "text-blue-500" },

    ],
  },

  experience: [
    {
      id: 1,
      title: "Software Developer Intern",
      company: "Tech Elecon",
      location: "Hybrid (Anand, India)",
      period: "Dec 2023 - Apr 2024",
      type: "primary",
      responsibilities: [
        "Spearheaded development of responsive web applications using React and Node.js",
        "Implemented REST APIs and authentication flows",
        "Worked closely with backend engineers and testers to ensure seamless integration",
        "Integrated MongoDB database for dynamic content management",
      ],
    },
    {
      id: 2,
      title: "Software Developer Intern",
      company: "TatvaSoft",
      location: "Remote (Ahmedabad, India)",
      period: "May 2023 - Jun 2023",
      type: "secondary",
      responsibilities: [
        "Delivered performant single-page apps using React, Redux, and RESTful APIs",
        "Collaborated in agile sprints, performed unit testing, and resolved bugs",
        "Participated in client meetings to capture requirements and deploy feature updates",
        "Ensured app responsiveness and browser compatibility across devices",
      ],
    },
  ],

  projects: [
    {
      id: 1,
      title: "Cricket Coaching App",
      description:
        "Mobile app for video annotation and player-coach interaction with gesture-based tools and real-time sync.",
      technologies: ["React Native", "Expo", "Firebase", "AsyncStorage"],
      category: "Mobile",
      status: "Ongoing",
      github: "https://github.com/mit510/Cricket_App",
      demo: "#",
      icon: "fas fa-mobile-alt",
      gradient: "from-primary/20 to-secondary/20",
      image: "../../images/Cricket_app.png",
    },
    {
      id: 2,
      title: "Crime Data Analysis Platform",
      description:
        "Analytics platform using Pandas to process Toronto crime data with algorithmic geospatial heatmaps.",
      technologies: ["Python", "Pandas", "Data Analysis"],
      category: "Analytics",
      status: "Completed",
      github: "https://github.com/mit510/crime-prediction",
      icon: "fas fa-chart-line",
      gradient: "from-accent/20 to-warning/20",
      image: "../../images/crime_Prediction.png",
    },
    {
      id: 3,
      title: "E-Book Store",
      description:
        "Complete MERN stack e-commerce platform with authentication, cart functionality, and payment gateway.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      category: "E-commerce",
      status: "Completed",
      github: "https://github.com/mit510/Tatvasoft_Internship",
      demo: "#",
      icon: "fas fa-shopping-cart",
      gradient: "from-secondary/20 to-primary/20",
      image: "../../images/book_Store.png",
    },
    {
      id: 4,
      title: "MovieX",
      description:
        "A sleek movie suggestion app that fetches trending films and TV shows using the TMDb API. Built with React and optimized for modern, responsive UI.",
      technologies: ["React", "Axios", "TMDb API"],
      category: "Entertainment",
      status: "Completed",
      github: "https://github.com/mit510/MovieX",
      icon: "fas fa-film",
      gradient: "from-purple-500/20 to-indigo-500/20",
      image: "../../images/moviex.png",
    },

    {
      id: 5,
      title: "MNM Web Store",
      description:
        "Online store built with PHP and MySQL featuring secure API endpoints and optimized database queries.",
      technologies: ["PHP", "MySQL", "JavaScript"],
      category: "Web Store",
      status: "Completed",
      github: "https://github.com/mit510/E_commerce-Website",
      icon: "fas fa-store",
      gradient: "from-warning/20 to-secondary/20",
      image: "../../images/image.png",
    },
  ],

  education: [
    {
      id: 1,
      degree: "Master of Applied Computing",
      institution: "University of Windsor",
      location: "Windsor, ON, Canada",
      period: "Sep 2024 - Present",
      description:
        "Currently pursuing advanced studies in applied computing with focus on software engineering, cloud technologies, and machine learning applications.",
      icon: "fas fa-graduation-cap",
      color: "primary",
    },
    {
      id: 2,
      degree: "Bachelor of Engineering in Information Technology",
      institution: "G H Patel College of Engineering and Technology",
      location: "Gujarat, India",
      period: "Jun 2020 - Apr 2024",
      gpa: "8.62/10 CGPA",
      description:
        "Comprehensive study of Information Technology including software development, database management, networking, and project management.",
      icon: "fas fa-graduation-cap",
      // color: "primary",
    },
  ],

  certifications: [
    {
      name: "Spark SQL & DataFrames",
      issuer: "LinkedIn Learning",
      icon: "fas fa-database",
    },
    {
      name: "Microsoft Azure Essentials",
      issuer: "LinkedIn Learning",
      icon: "fab fa-microsoft",
    },
    {
      name: "Intermediate SQL Queries",
      issuer: "LinkedIn Learning",
      icon: "fas fa-search",
    },
    {
      name: "Selenium Essential Training",
      issuer: "LinkedIn Learning",
      icon: "fas fa-robot",
    },
  ],

  stats: [
    { label: "Years Experience", value: 2, color: "primary" },
    { label: "Projects Completed", value: 15, color: "accent" },
    { label: "Technologies Mastered", value: 8, color: "secondary" },
  ],
};
