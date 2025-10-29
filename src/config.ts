export const siteConfig = {
  name: "Phyoe Zaw Aung",
  title: "Fullstack Web Developer | AI Engineer",
  description: "Portfolio website of Phyoe Zaw Aung",
  accentColor: "#1d4ed8",
  social: {
    email: "phyoezawaung9696@gmail.com",
    linkedin: "https://www.linkedin.com/in/phyoe-zaw-aung-1078a22b8/",
    github: "https://github.com/PhyoeZawAung",
    dowonload: "/resume/phoye_zaw_aung_resume_2025.pdf"
  },
  aboutMe:
    "Aspiring web developer with a passion for learning and problem-solving. Skilled in various programming languages and frameworks. Committed to continuous growth and contributing to innovative projects.",
  skills: [
    "HTML",
    "CSS",
    "php",
    "java",
    "Javascript",
    "Python",
    "Laravel",
    "Vue",
    "React",
    "ReactNative",
    "Astro",
    "Strapi",
    "Node.js",
    "JQuery",
    "MySql",
    "PostgresSql",
    "AWS",
    "Docker",
  ],
  projects: [
    {
      name: "Bulletin Board",
      description:
        "Single page web application with basic authentication and CRUD operations for users and posts.",
      skills: [
        "Laravel 8",
        "Vue 2",
        "Vuex",
        "Vue Router",
        "MySql",
        "Bootstrap",
      ],
      responsibility: [
        "Designed and implemented user authentication and authorization",
        "Developed user interfaces and managed state with Vue2 and Vuex",
        "Created RESTful APIs with Laravel for CRUD operations",
      ],
    },
    {
      name: "Survey System",
      description:
        "Single page web application for creating surveys within a company.",
      skills: [
        "Laravel 8",
        "Vue 3(Option API)",
        "Pinia",
        "Vue Router",
        "MySql",
        "Tailwind Css",
      ],
      responsibility: [
        "Implemented user authentication, authorization, and role management",
        "Developed user interface with Vue3 and state management with Pinia",
        "Created responsive UI with Tailwind CSS",
        "Developed RESTful APIs with Laravel for CRUD operations",
      ],
    },
    {
      name: "Kitchen Furniture Price Estimation Project",
      description:
        "Web application to estimate the price of kitchen furniture in a shop",
      skills: ["Laravel 8", "Jquery", "MySql", "Minio"],
      responsibility: [
        "Fixed data handling in sessions",
        "Managed browser tab control and session modes (create, update, view)",
        "Ensured responsive design",
      ],
    },
    {
      name: "Game Management System",
      description: "Real-time mjltiplayer quiz game with group messaging",
      skills: [
        "Laravel 9",
        "Vue3 (Composition API)",
        "PostgresSql",
        "Bootstrap Vue",
        "Laravel Echo",
        "Laravel WebSocket",
        "Inertia",
      ],
      responsibility: [
        "Designed screens with Figma",
        "Created channels for messaging and gameplay",
        "Developed admin and player dashboards",
        "Implemented real-time messaging with notifications",
        "Managed CRUD operations for game player management",
      ],
    },
    {
      name: "Employee Management System",
      description:
        "Manage members and resources of a company, and sell resources to improve member skills.",
      skills: ["Laravel 9", "JQuery", "MySql"],
      responsibility: ["Created member and message CRUD operations"],
    },
    {
      name: "School Management System",
      description:
        `Managed private schools which are registered to this system, include managing of schools,
        teachers, parents, students, teaching materials, and communications between them. Teaching
        material include textbooks, teaching videos, video watching history and students’ monthly
        records. `,
      link: "https://www.hoperoom.jp/",
      skills: ["Laravel 9", "Vue3(Composition API)", "MySql", "Tailwind Css"],
      responsibility: [
        "Updated the frameworks (Laravel 8 to Laravel 10) (Vue2 to Vue3) (Vuetify2 to Vuetify3)",
        "Implemented pretest question creation and QR code generation",
        "Developed feature enable/disable functionalities and route disable middleware",
        "Built APIs for feature checking",
        "Created CSV download functionality for teaching materials",
        "Fixed bugs",
        "Write clean Unit Test document",
      ],
    },
    {
      name: "Messenger Clone Application",
      description: "One to one or Group Messaging mobile application",
      skills: [
        "React Native",
        "Firebase"
      ],
      responsibility: [
        "Lead the project",
        "Screen Designing",
        "Creating real time messaging and user active status",
      ]

    },
    {
      name: "Waste Classification System",
      description: "Calssified waste base on the input image or video,",
      link: "https://github.com/PhyoeZawAung/waste_classification_system",
      skills: ["Python", "YOLO8", "Tkinter"],
    },
    {
      name: "Traffic Sign Detection",
      description: "Detect and classify the traffic sign",
      link: "https://github.com/PhyoeZawAung/TrafficSignDetection",
      skills: ["Python", "YOLO8", "Streamlit"],
    },
  ],
  experience: [
    {
      company: "Metateam Myanmar",
      title: "Junior Web Developer",
      dateRange: "Jan 2023 - Jun 2024",
      bullets: [
        "Developed and maintained web applications using modern technologies",
        "Collaborated with team menbers to deliver high-quality projects",
        "Implelented features based on client requirements",
      ],
    },
  ],
  education: [
    {
      school: "University Of Technology(Yatanarpon Cyber City)",
      degree: "Bachelor of Information Science Technology",
      dateRange: "2018 - 2025",
      achievements: ["First Price Of Second Year Web Development Project"],
    },
    {
      school: "BIB online Training",
      degree: "Fullstack Web Development",
      dateRange: "2019",
      achievements: [
        "HTML & CSS (Wireframe & Non-responsive Template)",
        "HTML,CSS & JQuery(Responsive Templates)",
        "React Native Tutorials",
        "React Native CRUD Assignments",
        "Final Group React Native Project",
      ],
    },
    {
      school: "Simbolo",
      degree: "Introduction To Computer Vision Using Python",
      dateRange: "23-12-2023",
      achievements: [
        "create a waste classification system",
        "Math For Machine Learning",
      ],
    },
    {
      school: "Simbolo",
      degree: "Introduction To Artificial Intelligence",
      dateRange: "10-7-2022",
      achievements: [
        "create a snake classification system",
        "Best Developemnt Project Award",
      ],
    },
  ],
};
