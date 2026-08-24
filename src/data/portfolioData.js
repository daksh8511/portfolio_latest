export const personalData = {
  name: "Daksh Sathwara",
  title: "Frontend Developer",
  tagline: "Crafting High-Performance Web Applications & Seamless Digital Experiences",
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
    { label: "E-Commerce Projects", value: "2+" },
    { label: "Technologies Mastered", value: "10+" },
    { label: "Code Quality & Performance", value: "99%" },
  ]
};

export const educationData = [
  {
    degree: "Master of Computer Application (MCA)",
    institution: "Sabarmati University",
    location: "Ahmedabad, Gujarat",
    period: "Completed",
    description: "Advanced study in Software Engineering, Web Technologies, Database Systems, Data Structures, and Modern Software Architecture."
  }
];

export const languagesData = [
  { name: "English", level: "Professional / Native Fluency", percentage: 95 },
  { name: "Gujarati", level: "Native Speaker", percentage: 100 },
  { name: "Hindi", level: "Native Speaker", percentage: 100 }
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
      "Collaborated with backend teams to integrate REST APIs and manage application state across business modules."
    ],
    techStack: ["React.js", "Zustand", "Redux Toolkit", "REST APIs", "JavaScript (ES6+)", "Material UI", "CSS3"]
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
      "Designed and implemented a dashboard interface to visualize key application data for end users."
    ],
    techStack: ["React.js", "JavaScript", "HTML5", "CSS3", "REST APIs", "Dashboard Analytics UI"]
  }
];

export const projectsData = [
  {
    id: "apex-cart",
    title: "ApexCart — Next-Gen E-Commerce Storefront Platform",
    category: "E-Commerce / Storefront",
    subtitle: "High-performance online shopping engine with dynamic filtering & interactive cart state",
    description: "A feature-packed e-commerce storefront designed for modern retail brands. Built with React.js, Next.js architecture, and Zustand state management, offering instant product search, category filtering, cart management, variant selectors, and responsive checkout workflow.",
    highlights: [
      "Real-time product filtering & instant search with debounced index query",
      "Global state managed via Zustand for persistent shopping cart & drawer UI",
      "Interactive Product Modal view with multi-image gallery & stock status",
      "Responsive checkout drawer with order summary, promo code application, and tax breakdown",
      "Optimized for 60fps animations and sub-second page loads"
    ],
    techStack: ["React.js", "Next.js", "Zustand", "TypeScript", "Tailwind CSS", "REST API", "Node.js"],
    metrics: { products: "1,200+", latency: "<150ms", conversion: "+28%" },
    featured: true,
    github: "https://github.com",
    demoType: "storefront",
    demoProducts: [
      { id: 1, name: "Minimalist Wireless Headphones", category: "Audio", price: 199, rating: 4.9, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80", inStock: true },
      { id: 2, name: "Smart Fitness Watch Ultra", category: "Wearables", price: 299, rating: 4.8, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80", inStock: true },
      { id: 3, name: "Ergonomic Mechanical Keyboard", category: "Tech Gear", price: 149, rating: 4.9, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80", inStock: true },
      { id: 4, name: "Studio Noise-Canceling Earbuds", category: "Audio", price: 129, rating: 4.7, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80", inStock: true }
    ]
  },
  {
    id: "nexus-admin",
    title: "Nexus Commerce — Enterprise Admin & Deposit Dashboard",
    category: "E-Commerce / Admin Panel",
    subtitle: "Real-time analytics dashboard & deposit management system for merchant operations",
    description: "An enterprise administrative panel designed to streamline internal data management and retail operations. Incorporates deposit management modules, health declaration compliance tracking, sales analytics charts, inventory controls, and REST API integration.",
    highlights: [
      "Interactive Dashboard visualizing daily sales, deposit histories, and revenue metrics",
      "Deposit Management Module built in React.js with reusable components & strict form validation",
      "Health Declaration Template builder to support business compliance processes",
      "Order status workflow tracking (Pending, Processing, Completed, Refunded)",
      "Integration Settings management panel for third-party service connections"
    ],
    techStack: ["React.js", "Redux Toolkit", "Express.js", "MongoDB", "Material UI", "REST API", "Zustand"],
    metrics: { uptime: "99.9%", dataProcessed: "$2.4M+", dailyUsers: "450+" },
    featured: true,
    github: "https://github.com",
    demoType: "dashboard",
    demoStats: {
      totalRevenue: "$148,920.00",
      activeDeposits: "1,420 Module Logs",
      pendingOrders: "38 Orders",
      systemHealth: "99.98% OK"
    }
  }
];

export const skillsCategories = [
  {
    category: "Frontend Core & Frameworks",
    skills: [
      { name: "React.js", level: "Expert", score: 95 },
      { name: "Next.js", level: "Advanced", score: 88 },
      { name: "TypeScript", level: "Advanced", score: 85 },
      { name: "JavaScript (ES6+)", level: "Expert", score: 95 },
      { name: "HTML5 & CSS3", level: "Expert", score: 98 }
    ]
  },
  {
    category: "State Management & UI Libraries",
    skills: [
      { name: "Zustand", level: "Expert", score: 92 },
      { name: "Redux / React Toolkit", level: "Advanced", score: 90 },
      { name: "Tailwind CSS", level: "Advanced", score: 90 },
      { name: "Material UI (MUI)", level: "Advanced", score: 88 },
      { name: "Formik & Form Validation", level: "Advanced", score: 86 }
    ]
  },
  {
    category: "Backend, Database & Tools",
    skills: [
      { name: "Node.js", level: "Intermediate", score: 80 },
      { name: "Express.js", level: "Intermediate", score: 78 },
      { name: "MongoDB", level: "Intermediate", score: 75 },
      { name: "REST APIs", level: "Expert", score: 92 },
      { name: "Git & GitHub", level: "Advanced", score: 90 },
      { name: "Vite / Build Tools", level: "Advanced", score: 88 }
    ]
  }
];
