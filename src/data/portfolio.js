// ============================================================
// PORTFOLIO DATA — Edit all your content here
// ============================================================

export const personalInfo = {
  name: "Saranesh Pandiyan",
  initials: "SP",
  tagline: "QA Engineer & Frontend Developer building reliable, user-focused software.",
  summary:
    "Detail-oriented B.Tech IT graduate with hands-on internship experience in Manual Testing, API Testing, and Frontend Development using HTML5, CSS3, JavaScript, and React.js. Skilled in designing 100+ structured test cases, documenting 50+ defects, and performing cross-browser and cross-platform QA across Web and Mobile applications. Proficient in SDLC, STLC, Regression Testing, Postman API Testing, and SRS documentation. Also building skills toward Data Engineering and Data Analysis, applying the same testing rigor and analytical discipline to data validation, pipelines, and insight generation.",
  location: "Shengottai, Tenkasi – 627809",
  phone: "+91-9345802040",
  email: "saraneshpandiyans@gmail.com",
  // ⚠️ Update these with your actual profile URLs
  linkedin: "https://linkedin.com/in/YOUR-USERNAME",
  github: "https://github.com/YOUR-USERNAME",
  availability: "Open to Software / QA / Frontend / Data Opportunities",
  resumeFile: "/resume.pdf", // Place your resume.pdf in the public/ folder
};

export const stats = [
  { label: "Test Cases Designed", value: "100+", icon: "CheckSquare" },
  { label: "Defects Documented", value: "50+", icon: "Bug" },
  { label: "API Endpoints Tested", value: "20+", icon: "Zap" },
  { label: "Release Cycles", value: "5+", icon: "RefreshCw" },
  { label: "QR Coder Test Cases", value: "240+", icon: "QrCode" },
  { label: "QR Coder Defects", value: "39+", icon: "AlertCircle" },
];

export const capabilityTags = [
  { label: "QA / Testing", color: "indigo" },
  { label: "Frontend Dev", color: "violet" },
  { label: "Data Analysis", color: "cyan" },
  { label: "Data Engineering", color: "emerald", badge: "Building" },
];

export const education = {
  degree: "Bachelor of Technology — Information Technology",
  college: "Karpagam College of Engineering",
  location: "Coimbatore",
  cgpa: "7.42",
  graduation: "2026",
};

export const experiences = [
  {
    id: "01",
    role: "QA / Software Testing Intern",
    company: "NGTCS",
    period: "February 2026 – July 2026",
    type: "Internship",
    responsibilities: [
      "Executed comprehensive Manual Testing across 3+ Web, Mobile, and API applications — validating functional behaviour, UI accuracy, and end-to-end UX across platforms",
      "Designed and maintained 100+ structured test cases in Excel, tracking execution status and coverage metrics",
      "Identified, documented, and reported 50+ software defects using formal Bug Report format",
      "Created and maintained SRS documents aligning QA activities with project scope",
      "Performed Regression Testing across 5+ iterative release cycles",
      "Conducted REST API Testing using Postman across 20+ endpoints",
      "Enforced QA documentation standards for auditable, repeatable testing",
      "Collaborated with developers to reduce defect resolution cycle time",
    ],
    metrics: [
      { value: "100+", label: "Test Cases" },
      { value: "50+", label: "Defects" },
      { value: "20+", label: "API Endpoints" },
      { value: "5+", label: "Release Cycles" },
    ],
  },
  {
    id: "02",
    role: "Freelance QA Support",
    company: "HEXORAN",
    period: "December 2025 – Present",
    type: "Freelance",
    responsibilities: [
      "Prepared SRS documents for 2+ freelance web application projects",
      "Created structured bug reports tracking 20+ defects per project",
      "Performed manual testing across multiple screen sizes and browsers",
      "Organized test data and reports using Excel spreadsheets",
    ],
    metrics: [
      { value: "2+", label: "Projects" },
      { value: "20+", label: "Defects/Project" },
    ],
  },
  {
    id: "03",
    role: "Freelance QA Support",
    company: "TEAM CATOM",
    period: "March 2025 – Present",
    type: "Freelance",
    responsibilities: [
      "Prepared SRS documents for freelance web application projects",
      "Created and maintained structured bug reports",
      "Performed manual testing across multiple platforms",
      "Organized QA reports using Excel for defect tracking and analysis",
    ],
    metrics: [],
  },
];

export const projects = [
  {
    id: 1,
    title: "KCE Sports Stats Tracker",
    subtitle: "Real-Time Web Platform",
    role: "Frontend Developer",
    category: "frontend",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Firebase"],
    description:
      "Built a responsive sports statistics tracking platform integrating Firebase for real-time data storage and retrieval of scores and rankings across 3+ sports categories. Designed a mobile-friendly UI using Bootstrap for cross-browser athlete performance analytics.",
    highlights: ["Responsive UI", "Real-Time Data", "Sports Analytics"],
    metrics: [],
  },
  {
    id: 2,
    title: "CHIT",
    subtitle: "Browser-Based Interactive Chit Fund Management",
    role: "QA Tester",
    category: "qa",
    tech: ["Manual Testing", "Test Case Analysis", "Bug Reporting"],
    description:
      "Designed and executed 40+ test cases across user interaction scenarios and edge cases. Verified UI/UX behaviour including form validations, navigation, and error handling across browsers.",
    highlights: ["UI/UX Testing", "Form Validation", "Cross-Browser Testing"],
    metrics: [
      { value: "40+", label: "Test Cases" },
      { value: "5+", label: "Core Modules" },
    ],
  },
  {
    id: 3,
    title: "QR Coder",
    subtitle: "Web-Based QR Code Generation & Management",
    role: "QA Tester",
    category: "qa",
    tech: ["Manual Testing", "Test Case Analysis", "Bug Reporting"],
    description:
      "Designed and executed 240+ test cases covering functionality, user flows, validations, and edge cases. Performed manual testing across Guest User, Sign In, Forgot Password, Sign Up, and QR Coder workflows. Identified and reported 39+ software defects.",
    highlights: ["Functional Testing", "Validation Testing", "Edge Cases"],
    metrics: [
      { value: "240+", label: "Test Cases" },
      { value: "39+", label: "Defects Reported" },
    ],
    modules: ["Guest User", "Sign In", "Forgot Password", "Sign Up", "QR Coder"],
  },
];

export const dataTrackProjects = [
  {
    id: "dt1",
    title: "SQL & Excel Analysis",
    type: "Data Analysis",
    status: "Building",
    tech: ["SQL", "MySQL", "Excel"],
    description: "Exploratory data analysis using SQL queries and Excel dashboards. [Coming soon — add project details here]",
    github: null,
  },
  {
    id: "dt2",
    title: "Data Pipeline Project",
    type: "Data Engineering",
    status: "Coming Soon",
    tech: ["SQL", "Python", "ETL"],
    description: "End-to-end data pipeline for extraction, transformation, and loading. [Coming soon — add project details here]",
    github: null,
  },
];

export const skillCategories = [
  {
    id: "languages",
    label: "Languages",
    skills: ["JavaScript", "SQL"],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Design", "DOM Manipulation"],
  },
  {
    id: "testing",
    label: "Testing",
    skills: [
      "Manual Testing", "Functional Testing", "Regression Testing",
      "Smoke Testing", "Sanity Testing", "UAT", "UI Testing",
      "Web Testing", "Mobile Testing", "Cross-Browser Testing",
    ],
  },
  {
    id: "api",
    label: "API",
    skills: ["Postman", "REST API Testing", "Request/Response Validation", "Error Handling"],
  },
  {
    id: "database",
    label: "Database",
    skills: ["MySQL", "Basic SQL Queries", "Data Validation", "CRUD Operations"],
  },
  {
    id: "tools",
    label: "Tools",
    skills: ["VS Code", "Eclipse", "GitHub", "Figma", "Excel"],
  },
  {
    id: "methodologies",
    label: "Methodologies",
    skills: ["Agile", "Waterfall", "SDLC", "STLC", "Defect Life Cycle", "Test Case Design", "Bug Tracking", "SRS Documentation"],
  },
  {
    id: "soft",
    label: "Soft Skills",
    skills: ["Communication", "Analytical Thinking", "Problem Solving", "Self-Learning", "Team Collaboration", "Adaptability"],
  },
];

export const achievements = [
  {
    id: 1,
    category: "Academic",
    icon: "Trophy",
    title: "1st Prize — Paper Presentation",
    org: "Karpagam College of Engineering",
    description:
      "Demonstrated strong technical communication and analytical abilities in a competitive academic paper presentation.",
  },
  {
    id: 2,
    category: "Professional",
    icon: "Star",
    title: "NGTCS Internship Recognition",
    org: "NGTCS",
    description:
      "Recognized by internship supervisors for rapid onboarding and effective implementation of QA standards and testing best practices.",
  },
  {
    id: 3,
    category: "Sports",
    icon: "Activity",
    title: "College Cricket Team",
    org: "Karpagam College of Engineering",
    description:
      "Played cricket for the college team — competitive team sport reflecting teamwork, coordination, and performing under pressure.",
  },
  {
    id: 4,
    category: "Interests",
    icon: "Brain",
    title: "Chess — Strategic Thinking",
    org: "Personal Interest",
    description:
      "Strong interest in chess, reflecting strategic thinking, concentration, and analytical problem-solving — the same mindset applied to QA and data work.",
  },
];
