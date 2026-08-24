export const personalData = {
  name: "Daksh Sathwara",
  title: "Frontend Developer",
  tagline:
    "Crafting High-Performance Web Applications & Seamless Digital Experiences",
  location: "Ahmedabad, Gujarat, India",
  phone: "+91-8511893083",
  email: "daxsathwara102@gmail.com",
  linkedin: "https://www.linkedin.com/in/daksh-sathwara-b54136343",
  github: "https://github.com",
  availability: "Available for Full-time Roles & Projects",
  status: "Open to opportunities in Frontend & Fullstack Development",
  bio: "Frontend Developer with strong expertise in React.js, state management tools like Zustand and React Toolkit, and integration of REST APIs to enhance business modules. Experienced in building reusable components, implementing form validation, and designing responsive UI using Tailwind CSS and Material UI to optimize workflows. Focused on leveraging Fullstack skills and advanced programming knowledge to deliver scalable solutions and drive technological innovation.",
  stats: [
    { label: "Years Experience", value: "1+" },
    { label: "Projects", value: "2+" },
    { label: "Technologies", value: "10+" },
  ],
};

export const educationData = [
  {
    degree: "Master of Computer Application (MCA)",
    institution: "Sabarmati University",
    location: "Ahmedabad, Gujarat",
    period: "Completed",
    description:
      "Advanced study in Software Engineering, Web Technologies, Database Systems, Data Structures, and Modern Software Architecture.",
  },
];

export const languagesData = [
  { name: "English", level: "Native", percentage: 95 },
  { name: "Gujarati", level: "Native Speaker", percentage: 100 },
  { name: "Hindi", level: "Native Speaker", percentage: 100 },
];

export const experienceData = [
  {
    id: "xmatiq",
    role: "Frontend Developer",
    company: "Xmatiq Technologies",
    period: "08/2025 – 04/2026",
    location: "Ahmedabad, Gujarat",
    type: "Full-time",
    badge: "Recent Experience",
    highlights: [
      "Developed a deposit management module in React.js using reusable components and form validation, reducing duplicate code and improving development efficiency.",
      "Built a health declaration template module to support compliance-related business processes.",
      "Developed integration settings functionality to improve system configuration and third-party compatibility.",
      "Collaborated with backend teams to integrate REST APIs and manage application state across business modules.",
    ],
    techStack: [
      "React.js",
      "Zustand",
      "Redux Toolkit",
      "REST APIs",
      "JavaScript (ES6+)",
      "Material UI",
      "CSS3",
    ],
  },
  {
    id: "astute",
    role: "Frontend Developer",
    company: "AstuteInfo Solution",
    period: "Internship",
    location: "Ahmedabad, Gujarat",
    type: "Internship",
    badge: "Internship",
    highlights: [
      "Developed an administrative panel to streamline internal data management and operations.",
      "Designed and implemented a dashboard interface to visualize key application data for end users.",
    ],
    techStack: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "REST APIs",
      "Dashboard Analytics UI",
    ],
  },
];

export const projectsData = [
  {
    id: "apex-cart",
    title: "ShopNova - Marketplace",
    category: "E-Commerce / Marketplace",
    subtitle:
      "High-performance online shopping engine with dynamic filtering & interactive cart state",
    description:
      "A modern e-commerce marketplace built for a smooth and responsive shopping experience. Users can browse products, search and filter by category, view detailed product information, select variants, manage their cart, and complete the shopping workflow. The platform also includes user authentication with login and signup, persistent cart state, and a responsive interface optimized for desktop and mobile.",
    highlights: [
      "Real-time product filtering & instant search with debounced index query",
      "Global state managed via Zustand for persistent shopping cart & drawer UI",
      "Interactive Product Modal view with multi-image gallery & stock status",
      "Responsive checkout drawer with order summary, promo code application, and tax breakdown",
      "Optimized for 60fps animations and sub-second page loads",
    ],
    techStack: [
      "React.js",
      "Zustand",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn",
      "REST API",
      "Node.js",
      "Express.js",
    ],
    metrics: { products: "1,200+", latency: "<150ms", conversion: "+28%" },
    githubFE: "https://github.com/daksh8511/shopnova_FE",
    githubBE: "https://github.com/daksh8511/shopnova_BE",
    link: "https://shopnova-fe.vercel.app",
  },
  {
    id: "nexus-admin",
    title: "Seller Dashboard",
    category: "E-Commerce / Seller Platform",
    subtitle:
      "Merchant dashboard for creating stores, managing products, and publishing them to an online marketplace",

    description:
      "A seller management platform built as the merchant side of an e-commerce marketplace. Sellers can create and manage their store, add and update products, manage product information and inventory, and publish products directly to the marketplace. The dashboard provides a structured workflow for managing a seller's catalog and connecting their store operations with the customer-facing marketplace.",

    highlights: [
      "Seller store management for creating and configuring an online storefront",
      "Product management with create, edit, update, and delete functionality",
      "Product publishing workflow that makes seller products available on the marketplace",
      "Inventory and product information management from a centralized dashboard",
      "Reusable forms with validation for managing store and product data",
      "REST API integration connecting the dashboard with the marketplace backend",
      "Responsive dashboard interface built for efficient seller operations",
    ],

    techStack: [
      "Next.js",
      "Redux Toolkit",
      "Express.js",
      "MongoDB",
      "Shadcn",
      "REST API",
      "Node.js",
    ],

    githubFE: "https://github.com/daksh8511/seller_dashboard_FE",
    githubBE: "https://github.com/daksh8511/seller_dashboard_BE",
    link: "https://sellerdashboard-dev.vercel.app",
    featured: true,
  },
];

export const skillsCategories = [
  {
    category: "Frontend Core & Frameworks",
    skills: [
      { name: "React.js", level: "Expert", score: 95 },
      { name: "Next.js", level: "Advanced", score: 88 },
      { name: "TypeScript", level: "Advanced", score: 85 },
      { name: "JavaScript (ES6+)", level: "Expert", score: 95 },
      { name: "HTML5 & CSS3", level: "Expert", score: 98 },
    ],
  },
  {
    category: "State Management & UI Libraries",
    skills: [
      { name: "Zustand", level: "Expert", score: 92 },
      { name: "Redux / React Toolkit", level: "Advanced", score: 90 },
      { name: "Tailwind CSS", level: "Advanced", score: 90 },
      { name: "Material UI (MUI)", level: "Advanced", score: 88 },
      { name: "Formik & Form Validation", level: "Advanced", score: 86 },
    ],
  },
  {
    category: "Backend, Database & Tools",
    skills: [
      { name: "Node.js", level: "Intermediate", score: 80 },
      { name: "Express.js", level: "Intermediate", score: 78 },
      { name: "MongoDB", level: "Intermediate", score: 75 },
      { name: "REST APIs", level: "Expert", score: 92 },
      { name: "Git & GitHub", level: "Advanced", score: 90 },
      { name: "Vite / Build Tools", level: "Advanced", score: 88 },
    ],
  },
];
