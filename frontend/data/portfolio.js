// Portfolio Data - Customize this file with your information

export const personalInfo = {
  name: 'Vedant Chaudhari',
  title: 'Computer Science Engineer',
  taglines: [
    'Computer Science Engineer',
    'Cybersecurity Enthusiast',
    'Digital Forensics Specialist',
    'Full Stack Developer',
  ],
  email: 'chaudharivedant62@gmail.com',
  location: 'India',
  resumeUrl: '/resume.pdf',
  shortBio: `I am a Computer Science student passionate about cybersecurity, digital forensics, 
    and building secure systems. Currently focused on cybersecurity research, 
    full-stack development, and creating AI-powered security solutions.`,
  longBio: `I am a Computer Science Engineering student with a strong interest in Cybersecurity, 
    Digital Forensics, and Secure System Design. My goal is to build technologies that detect 
    threats, strengthen digital infrastructure, and create safer systems.`,
};

export const socialLinks = {
  github: 'https://github.com/Vedlogged',
  linkedin: 'https://linkedin.com/in/vedant',
  twitter: 'https://twitter.com/vedant',
};

export const skills = {
  languages: ['Python', 'JavaScript', 'C/C++', 'TypeScript', 'Java', 'Go', 'Rust'],
  frontend: ['React.js', 'Next.js', 'TailwindCSS', 'HTML5', 'CSS3'],
  backend: ['Node.js', 'Express.js'],
  databases: ['MongoDB', 'MySQL'],
  tools: ['Git', 'GitHub', 'Linux', 'Docker'],
  security: ['Network Security', 'Digital Forensics', 'Threat Analysis', 'Secure Coding'],
};

export const projects = [
  {
    id: 1,
    title: 'AI-Powered Intelligent Firewall System',
    description: 'A cybersecurity solution that monitors, analyzes, and filters network traffic in real time using intelligent detection mechanisms to identify suspicious patterns, malicious traffic, and potential cyber threats.',
    technologies: ['Python', 'Scapy', 'Socket Programming', 'Machine Learning', 'Node.js'],
    category: 'cybersecurity',
    status: 'in-progress',
    features: ['Real-Time Traffic Monitoring', 'Threat Detection', 'Automated Blocking', 'Security Alerts', 'Logging System'],
    github: 'https://github.com/Vedlogged/AI_Network_Penetrator_Project',
    demo: null,
    featured: true,
  },
  {
    id: 2,
    title: 'MERN Authentication System',
    description: 'A full-stack authentication system built with MERN stack featuring secure login, JWT token management, and encrypted password storage.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    category: 'web',
    status: 'completed',
    features: ['Secure login', 'JWT authentication', 'Password encryption', 'Session management'],
    github: 'https://github.com/Vedlogged/mern-auth',
    demo: null,
    featured: true,
  },
  {
    id: 3,
    title: 'ML Financial Analysis',
    description: 'A machine learning project for financial data analysis and predictions using Python.',
    technologies: ['Python', 'Machine Learning', 'Data Analysis', 'Pandas', 'NumPy'],
    category: 'ai-ml',
    status: 'completed',
    features: ['Financial predictions', 'Data visualization', 'ML models', 'Statistical analysis'],
    github: 'https://github.com/Vedlogged/Ml_financial',
    demo: null,
    featured: true,
  },
  {
    id: 4,
    title: 'Kisan-Agi',
    description: 'An agricultural technology solution built with TypeScript to help farmers with modern farming techniques.',
    technologies: ['TypeScript', 'React', 'Node.js'],
    category: 'web',
    status: 'completed',
    features: ['User-friendly interface', 'Agricultural insights', 'Modern tech stack'],
    github: 'https://github.com/Vedlogged/Kisan-Agi',
    demo: null,
    featured: false,
  },
  {
    id: 5,
    title: 'Web Crawler',
    description: 'A simple Python script to crawl websites and extract data for analysis.',
    technologies: ['Python', 'Web Scraping', 'BeautifulSoup', 'Requests'],
    category: 'tools',
    status: 'completed',
    features: ['Website crawling', 'Data extraction', 'Automated scraping'],
    github: 'https://github.com/Vedlogged/Web-Crawler',
    demo: null,
    featured: false,
  },
];

export const experience = [
  {
    type: 'education',
    title: 'Computer Science Engineering',
    organization: 'Vellore Institute of Technology Bhopal',
    location: 'Bhopal, India',
    duration: '2024 - 2028',
    description: 'Pursuing Bachelor of Engineering in Computer Science with specialization in Cybersecurity and Digital Forensics.',
    highlights: [
      'Relevant coursework in Data Structures, Algorithms, Network Security',
      'Active member of technical clubs and communities',
      'Participated in various hackathons and coding competitions',
    ],
  },
  {
    type: 'internship',
    title: 'Software Development Intern',
    organization: 'Bluestock Fintech',
    location: 'Remote',
    duration: '2025 - 2026',
    description: 'Working on fintech solutions and gaining hands-on experience in software development.',
    highlights: [
      'Developed and maintained web applications',
      'Collaborated with cross-functional teams',
      'Implemented new features and bug fixes',
    ],
  },
  {
    type: 'internship',
    title: 'Cyber Security Intern',
    organization: 'Teachnook (Wipro)',
    location: 'Remote',
    duration: '2024',
    description: 'Gained foundational exposure to cybersecurity and ethical hacking concepts through hands-on learning.',
    highlights: [
      'Gained foundational exposure to cybersecurity and ethical hacking concepts through hands-on learning',
      'Designed and developed a Python-based web crawler that systematically scans websites and extracts all accessible links',
      'Compiled results into a structured PDF report for analysis and documentation',
    ],
  },
];

export const certifications = [
  {
    title: 'Linux Fundamentals',
    issuer: 'Cyber Certification',
    date: '2025',
    credential: '#',
  },
  {
    title: 'Networking Security',
    issuer: 'Cyber Certification',
    date: '2025',
    credential: '#',
  },
];

export const currentWork = [
  {
    title: 'AI-Powered Intelligent Firewall System',
    description: 'Building a cybersecurity solution that monitors, analyzes, and filters network traffic in real time using intelligent detection mechanisms to identify suspicious patterns and cyber threats.',
    status: 'In Progress',
    progress: 60,
  },
  {
    title: 'Cybersecurity Learning Roadmap',
    description: 'Creating a comprehensive guide for beginners to learn cybersecurity from basics to advanced concepts.',
    status: 'In Progress',
    progress: 40,
  },
  {
    title: 'LeetCode Practice',
    description: 'Improving problem-solving skills by solving algorithmic challenges and data structure problems.',
    status: 'Ongoing',
    progress: 52,
  },
  {
    title: 'Full-Stack Web Applications',
    description: 'Developing modern web applications using React, Node.js, and MongoDB stack.',
    status: 'Ongoing',
    progress: 80,
  },
];

export const theme = {
  colors: {
    background: '#0F172A',
    backgroundLight: '#1E293B',
    primary: '#3B82F6',
    secondary: '#22C55E',
    accent: '#8B5CF6',
    text: '#E2E8F0',
    textMuted: '#94A3B8',
  },
};
