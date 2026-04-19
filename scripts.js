const projectsData = {
    1: {
        name: "Lead College Website",
        image: null,
        video: "Videos/leadweb1.mp4",
        brief: "Complete redesign of LEAD College's official website — a modern, responsive platform serving students, faculty, and the public.",
        detailedBrief: "Led the end-to-end redesign and development of the official LEAD College (Autonomous), Palakkad website. The project involved rebuilding the entire digital presence of the institution with a modern, mobile-first interface using WordPress, PHP, and Elementor. Key deliverables included improved navigation, structured academic content, faculty portals, event highlights, and SEO optimization — resulting in a significantly enhanced user experience for thousands of visitors.",
        team: ["Vishnu K (Fullstack Developer & UI/UX Designer)", "Nikhil AP (Fullstack Developer)", "Abhinand Vishwam (Fullstack Developer)", "Fathima Shan (Frontend & Content Writer)", "Gopika (Frontend & Content Writer)"],
        techStack: ["WordPress", "PHP", "Elementor", "HTML5", "CSS3"],
        demoUrl: "https://www.lead.ac.in",
        githubUrl: null
    },
    2: {
        name: "Smart Ecom",
        image: "https://opengraph.githubassets.com/1/vishnucax/smart-ecom",
        video: null,
        brief: "A full-stack microservices e-commerce platform built to simulate a real-world shopping experience.",
        detailedBrief: "SmartShop is a comprehensive e-commerce system that connects multiple independent microservices into a complete checkout pipeline. It features a modern React frontend and a robust Flask-based backend with five modular microservices (Inventory, Cart, Discount, Payment, RabbitMQ) for separation of concerns. The platform includes an Admin Dashboard for order tracking, inventory management with real-world complexities like stock reservation, and input validation to prevent overselling.",
        team: ["Vishnu K"],
        techStack: ["React", "Flask", "MySQL", "RabbitMQ", "Docker"],
        demoUrl: null,
        githubUrl: "https://github.com/vishnucax/smart-ecom"
    },
    3: {
        name: "Secure Health API",
        image: "https://opengraph.githubassets.com/1/vishnucax/secure-health-api",
        video: null,
        brief: "An end-to-end secure healthcare microservice demonstrating IAM (Keycloak RBAC) and advanced encryption.",
        detailedBrief: "A production-grade secure patient records management system reflecting real-world DevOps and healthcare application security practices. Developed as an advanced cloud technologies project, it implements Identity & Access Management using Keycloak RBAC, TLS encryption in transit, AES-256 encryption at rest before being saved to a MySQL database, and automated CI/CD pipelines via Jenkins, all completely containerized using Docker Compose.",
        team: ["Vishnu K"],
        techStack: ["Python", "Flask", "MySQL", "Keycloak", "Docker", "Jenkins"],
        demoUrl: null,
        githubUrl: "https://github.com/vishnucax/secure-health-api"
    }
};

// Sample data for more projects
const sampleProjects = [
    {
        id: 4,
        name: "FixItNow - Home Service Platform",
        image: null,
        video: "Videos/fixitnow-video (1).mp4",
        brief: "A professional home service providing platform built with Django, featuring dual authentication for customers and service pros.",
        detailedBrief: "FixItNow is a comprehensive home service booking platform developed as a BCA final year project by a two-member team. The application provides dedicated portals for customers and service providers, categorized services (cleaning, plumbing, electrical), a real-time booking management system, and secure payment integrations using Razorpay API.",
        team: ["Vishnu K", "Team Member"],
        techStack: ["Django", "Python", "Bootstrap", "PostgreSQL", "Razorpay"],
        demoUrl: "https://fixitnow-home-service-providing-pla.vercel.app/",
        githubUrl: "https://github.com/vishnucax/fixitnow-home-service-providing-platform"
    },
    {
        id: 5,
        name: "ST Thomas College Konni",
        image: null,
        video: "Videos/lead-stc.mp4",
        brief: "Official website for ST Thomas College, Konni — a feature-rich institutional platform built with PHP, HTML5, and CSS3.",
        detailedBrief: "Designed and developed the full institutional website for ST Thomas College, Konni, establishing a robust digital presence for the college. The platform facilitates seamless communication between students, faculty, and the general public, featuring structured course pages, news & events, faculty directories, and administrative information.",
        team: ["Vishnu K (Fullstack Developer)", "Arjun KP (Faculty, Lead College)"],
        techStack: ["PHP", "HTML5", "CSS3", "JavaScript"],
        demoUrl: "https://www.stthomascollegekonni.com/",
        githubUrl: null
    },
    {
        id: 6,
        name: "TaskFlow - Todo App",
        image: null,
        video: "Videos/Todo (1).mp4",
        brief: "A responsive and feature-rich task manager application providing seamless task organization and progress tracking.",
        detailedBrief: "TaskFlow is an advanced task management application designed to help users efficiently manage their daily tasks. The app includes secure user authentication functionalities along with a clean, intuitive dashboard. Users can seamlessly create, track, and complete tasks with progress indicators and structured organization features ensuring a highly productive workflow.",
        team: ["Vishnu K"],
        techStack: ["HTML", "CSS", "JavaScript", "Firebase"],
        demoUrl: "https://taskflow-app-69b29.web.app/login",
        githubUrl: "https://github.com/vishnucax/taskflow"
    }
];

// More projects data
const moreProjects = [
    {
        id: 7,
        name: "LEAD Connect",
        image: "https://opengraph.githubassets.com/1/vishnucax/leadconnect",
        video: null,
        brief: "An online stranger videocall platform to connect LEAD students with each other.",
        detailedBrief: "LEAD Connect is an online stranger videocall platform designed to connect LEAD students with each other. Students can sign in seamlessly with their LEAD mail to connect, make new friends among strangers, and effectively destroy the barriers between departments.",
        team: ["Vishnu K"],
        techStack: ["HTML", "CSS", "JavaScript", "Firebase", "WebRTC"],
        demoUrl: "https://vishnucax.github.io/leadconnect/",
        githubUrl: "https://github.com/vishnucax/leadconnect",
        isWIP: true
    },
    {
        id: 8,
        name: "AI Physical Trainer",
        image: "https://takeleap.com/assets/images/works/b3d05feaa0a97e9681a5d5adca209947.jpg",
        video: null,
        brief: "Real-time AI-powered personal trainer using MediaPipe pose estimation to analyze exercises and count reps via a live webcam feed.",
        detailedBrief: "An AI/ML application that acts as a real-time personal physical trainer using computer vision. Built with Python, OpenCV, and MediaPipe's Pose Estimation model, it tracks key body landmarks through a webcam feed to detect exercises, analyze form/posture, and accurately count repetitions in real time. The system provides instant visual feedback, helping users train more effectively without a human trainer.",
        team: ["Vishnu K (Solo Project)"],
        techStack: ["Python", "Machine Learning", "AI", "Kaggle Dataset"],
        demoUrl: null,
        githubUrl: "https://github.com/vishnucax/Ai-personal-physical-trainer"
    },
    {
        id: 9,
        name: "Researcher Portfolio",
        image: "https://opengraph.githubassets.com/1/Satyendra-Kushwaha/Satyendra-Kushwaha.github.io",
        video: null,
        brief: "Custom academic portfolio for a researcher — showcasing publications, projects, and professional milestones.",
        detailedBrief: "Designed and deployed a comprehensive personal portfolio website for a researcher, built entirely with HTML, CSS, and JavaScript and hosted on GitHub Pages. The site features dedicated sections for academic publications, conference presentations, certifications, and a project gallery.",
        team: ["Vishnu K (Developer & Designer)"],
        techStack: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
        demoUrl: "https://satyendra-kushwaha.github.io/",
        githubUrl: "https://github.com/Satyendra-Kushwaha/Satyendra-Kushwaha.github.io"
    },
    {
        id: 10,
        name: "TF-IDF Movie Recommender",
        image: null,
        video: "Videos/Movie-Recomentation.mp4",
        brief: "A Python-powered content-based movie recommendation engine using TF-IDF vectorization on multi-source Kaggle datasets.",
        detailedBrief: "A content-based movie recommendation system built using Python, Pandas, and Scikit-learn's TF-IDF Vectorizer. The system analyzes movie metadata — including plots, genres, cast, and keywords — from merged Kaggle datasets to compute cosine similarity scores and surface the most relevant film suggestions.",
        team: ["Vishnu K (Solo Project)"],
        techStack: ["Python", "Machine Learning", "TF-IDF", "Kaggle Dataset"],
        demoUrl: null,
        githubUrl: "https://github.com/vishnucax/TF-IDF-analysis-based-similar-movie-suggesting-system"
    },
    {
        id: 11,
        name: "Future Predictor",
        image: null,
        video: "Videos/Future-Predictor.mp4",
        brief: "An entertaining web app with a hacker-themed UI that generates humorous, randomized predictions about your future.",
        detailedBrief: "Future Predictor is a fun, interactive web application that delivers playfully dramatic predictions about the user's future. Built with pure HTML, CSS, and JavaScript, it features a hacker-inspired terminal UI, randomized prediction algorithms, smooth animations, and a highly engaging user experience.",
        team: ["Vishnu K"],
        techStack: ["HTML", "CSS", "JavaScript"],
        demoUrl: "https://vishnucax.github.io/future-predictor/",
        githubUrl: "https://github.com/vishnucax/future-predictor"
    },
    {
        id: 12,
        name: "Cybersecurity Captive Portal",
        image: "https://opengraph.githubassets.com/1/vishnucax/ESP32-Cybersecurity-Awareness-Captive-Portal",
        video: null,
        brief: "An ESP32-powered captive portal that simulates real-world Wi-Fi phishing attacks as a hands-on cybersecurity tool.",
        detailedBrief: "This hardware-software project uses an ESP32 microcontroller (programmed in C++) to create a simulated Wi-Fi captive portal. When a device connects to the rogue hotspot, it is redirected to a custom awareness page that educates users about the dangers of connecting to unknown networks.",
        team: ["Vishnu K"],
        techStack: ["ESP32", "C++", "Cybersecurity", "Networking"],
        demoUrl: null,
        githubUrl: "https://github.com/vishnucax/ESP32-Cybersecurity-Awareness-Captive-Portal"
    },
    {
        id: 13,
        name: "Apple Website Clone",
        image: "./Images/Projects/AppleClone.png",
        video: null,
        brief: "A pixel-perfect front-end recreation of the Apple website with smooth animations, responsive layouts, and iconic Apple aesthetics.",
        detailedBrief: "Developed in February 2025, this project is a high-fidelity front-end clone of Apple's official website, built using only HTML5 and CSS3. It meticulously replicates Apple's signature minimalist design language — including the sticky navigation bar, full-screen hero sections, product showcase grids, and a fully responsive mobile layout.",
        team: ["Vishnu K (Solo Project)"],
        techStack: ["HTML5", "CSS3", "JavaScript"],
        demoUrl: "https://vishnucax.github.io/apple-website-clone/",
        githubUrl: "https://github.com/vishnucax/apple-website-clone"
    },
    {
        id: 14,
        name: "Elon Musk Portfolio",
        image: null,
        video: "Videos/elonmuskportvideo1.mp4",
        brief: "My debut web project — a full portfolio website inspired by Elon Musk, built using purely HTML & CSS with a clean, bold design.",
        detailedBrief: "This was my very first web development project — a fully structured portfolio website inspired by Elon Musk's persona and ventures, built using HTML5 and CSS3 alone. The site features a professional timeline of achievements, venture showcases, a responsive layout, and thoughtfully crafted typography and color schemes.",
        team: ["Vishnu K (Lead Developer)"],
        techStack: ["HTML5", "CSS3"],
        demoUrl: "https://vishnucax.github.io/Elon-Musk-Portfolio/",
        githubUrl: "https://github.com/vishnucax/Elon-Musk-Portfolio"
    }
];

// NEW: Achievements Data
const achievementsData = [
    {
        id: 0,
        name: "Getwork Hackathon Winner",
        organization: "Getwork",
        date: "2024",
        image: "Images/Getworkhack/cardcover.jpeg",
        brief: "Winner of the Getwork Hackathon for innovative solution.",
        details: "Secured the top position in the Getwork Hackathon. Our team demonstrated exceptional teamwork and innovation to build a solution that addresses real-world challenges.",
        certificateImage: "Images/Getworkhack/hackcertificate1.jpeg", // Main display image if no gallery, or first image
        gallery: [
            "Images/Getworkhack/hackcertificate1.jpeg",
            "Images/Getworkhack/1765052280594.jpeg",
            "Images/Getworkhack/1765052280635.jpeg",
            "Images/Getworkhack/hack1gallery.jpeg",
            "Images/Getworkhack/hack1team.jpeg"
        ],
        skills: ["Innovation", "Teamwork", "Problem Solving", "Rapid Prototyping"],
        team: ["Vishnu K (Team Lead)", "Sanjo Shajan", "Anirudh Mohan", "Amruth S Babu"],
        certificateUrl: "Images/Getworkhack/hackcertificate1.jpeg", // For download
        linkedinUrl: "https://www.linkedin.com/posts/vishnu-k-7-_hackathon-innovation-teamwork-activity-7403289706999767040-DIIk?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFOTR5MBKiSf8Nkk_93TS64DgVo55d1oz4w",
        demoUrl: null, // Triggers unavailable popup
        githubUrl: "https://github.com/vishnucax/hackthon-hospital",
        additionalInfo: [
            "First Prize Winner",
            "Team Lead",
            "Innovative Solution Award"
        ]
    },
    {
        id: 1,
        name: "National Seminar Paper Presentation",
        organization: "University of Calicut",
        date: "January 2026",
        image: "Images/seminar-calicut.jpeg",
        brief: "Presented a paper on 'AI Foresight Summit' at the National Seminar held at ITSR, University of Calicut.",
        details: "Presented a paper titled 'AI Foresight Summit: Shaping the Future through Predictive Analytics and Intelligence' at the National Seminar (ITSR, University of Calicut) held on 8th & 9th January 2026. A sincere thanks to University of Calicut for this opportunity.",
        certificateImage: "Images/seminar-calicut.jpeg",
        skills: ["Paper Presentation", "AI", "Predictive Analytics", "Public Speaking", "Research"],
        linkedinUrl: "https://www.linkedin.com/posts/vishnu-k-7-_nationalseminar-paperpresentation-universityofcalicut-activity-7416683891534614528-bGYS?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFOTR5MBKiSf8Nkk_93TS64DgVo55d1oz4w",
        demoUrl: null,
        githubUrl: null,
        additionalInfo: [
            "Presented at ITSR, Calicut University",
            "Topic: AI Predictive Analytics",
            "Co-authored with Arjun Kollath"
        ]
    }
];

// More achievements data
const moreAchievements = [];

// Publications data
const publicationsData = [
    {
        id: 1,
        type: "Book Chapter",
        name: "From CV to Digital Footprint: Expanding Criteria for Employability in the AI Era",
        authors: "Vishnu K & Anija Ann Koshy",
        isChapter: true,
        doi: "https://doi.org/10.5281/zenodo.17984401",
        book: "Redefining Careers and Organizations: Leadership, Employment Practices, and AI in the Evolving Workplace",
        publisher: "LEAD College(Autonomous) , Zodha Research Solutions",
        date: "2025",
        abstract: "This chapter explores the evolving criteria for employability in the AI era, focusing on the shift from traditional CVs to comprehensive digital footprints.",
        readUrl: "https://zenodo.org/records/17984401",
        citation: "Vishnu K & Anija Ann Koshy, 'From CV to Digital Footprint: Expanding Criteria for Employability in the AI Era,' in Redefining Careers and Organizations, pp. 134-146."
    }
];

// More publications data
const morePublications = [];

// Certificate data
const certificatesData = [
    {
        id: 1,
        name: "React Development",
        issuer: "Srishti Campus",
        date: "2024",
        logo: "./Images/srishti-logo.jpeg",
        image: "./Images/Certs/srishti-react.jpeg",
        description: "Advanced certification in React.js, focusing on component-based architecture, state management, and modern frontend practices.",
        skills: ["React.js", "Frontend Development", "JavaScript", "UI/UX"],
        credentialUrl: null,
        downloadUrl: "./Images/Certs/srishti-react.jpeg"
    },
    {
        id: 2,
        name: "Flutter App Development",
        issuer: "Srishti Campus",
        date: "2024",
        logo: "./Images/srishti-logo.jpeg",
        image: "./Images/Certs/srishti-flutter.jpeg",
        description: "Comprehensive certification in Flutter and Dart for cross-platform mobile application development.",
        skills: ["Flutter", "Dart", "Mobile App Development", "Cross-Platform"],
        credentialUrl: null,
        downloadUrl: "./Images/Certs/srishti-flutter.jpeg"
    },
    {
        id: 3,
        name: "Foundations: Data, Data, Everywhere",
        issuer: "Google (Coursera)",
        date: "October 6, 2025",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
        image: "./Images/Certs/GoogleData.png",
        description: "Foundational course in data analytics covering data structure, rigorous analysis, and visualization.",
        skills: ["Data Analysis", "Spreadsheets", "SQL", "Data Visualization"],
        credentialUrl: "https://www.coursera.org/account/accomplishments/verify/MUFJNLZFUHVM",
        downloadUrl: "./Images/Certs/GoogleData.png"
    },
    {
        id: 4,
        name: "Build a Computer Vision App with Azure",
        issuer: "Microsoft (Coursera)",
        date: "November 5, 2025",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
        image: "./Images/Certs/AzureService1.png",
        description: "Project-based course on building computer vision applications using Azure Cognitive Services.",
        skills: ["Computer Vision", "Azure", "AI", "Cloud Computing"],
        credentialUrl: "https://www.coursera.org/account/accomplishments/verify/LK1A8EYW90C9",
        downloadUrl: "./Images/Certs/AzureService1.png"
    }
];

// More certificates data
const moreCertificates = [
    {
        id: 5,
        name: "Ethical Hacking Starter Program",
        issuer: "Offenso Hackers Academy",
        date: "2026",
        logo: "./Images/offenso-logo.jpeg",
        image: "./Images/Certs/EHSP.jpg",
        description: "An introductory training program on Ethical Hacking and cybersecurity concepts.",
        skills: ["Ethical Hacking", "Cybersecurity", "Networking", "Penetration Testing"],
        credentialUrl: null,
        downloadUrl: "./Images/Certs/EHSP.jpg"
    },
    {
        id: 6,
        name: "Build a Full Website using WordPress",
        issuer: "Coursera",
        date: "November 4, 2025",
        logo: "https://cdn.simpleicons.org/coursera/0056D2",
        image: "./Images/Certs/WordpressFull.png",
        description: "Practical course on designing and building fully functional websites using WordPress.",
        skills: ["WordPress", "Web Design", "CMS", "Content Management"],
        credentialUrl: "https://www.coursera.org/account/accomplishments/verify/9TEFQ0IRJ9W5",
        downloadUrl: "./Images/Certs/WordpressFull.png"
    },
    {
        id: 7,
        name: "Build a Free Website with WordPress",
        issuer: "Coursera",
        date: "November 4, 2025",
        logo: "https://cdn.simpleicons.org/coursera/0056D2",
        image: "./Images/Certs/WordpressFree.png",
        description: "Hands-on guide to creating and publishing a free website using the WordPress platform.",
        skills: ["WordPress", "Web Development", "Blogging", "Digital Presence"],
        credentialUrl: "https://www.coursera.org/account/accomplishments/verify/DBFL2771ZQ0M",
        downloadUrl: "./Images/Certs/WordpressFree.png"
    },
    {
        id: 8,
        name: "AI For All - Awareness Badge",
        issuer: "Government of India & Intel",
        date: "2025",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg",
        image: "./Images/Certs/aiforall-intel.png",
        description: "National program to demystify AI and its applications for the general public.",
        skills: ["Artificial Intelligence", "Digital Literacy", "Future Tech"],
        credentialUrl: "https://ai-for-all.in/#/badge?id=U2FsdGVkX19GcWMeF1GXpIsKtC4l4B81awNBCJFWyCke1Q2u3A4l",
        downloadUrl: "./Images/Certs/aiforall-intel.png"
    },
    {
        id: 9,
        name: "HTML and CSS",
        issuer: "Ethnotech Academy",
        date: "October 2023",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        image: "./Images/Certs/ethnotech-html.png",
        description: "Comprehensive training in web markup and styling languages. Credential ID: ETHSU01319",
        skills: ["HTML5", "CSS3", "Web Design", "Responsive Layouts"],
        credentialUrl: null, // No public URL provided
        downloadUrl: "./Images/Certs/ethnotech-html.png"
    },
    {
        id: 10,
        name: "Software Foundation Course - C++",
        issuer: "Ethnotech Academy",
        date: "January 2023",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        image: "./Images/Certs/ethnotechcpp.png",
        description: "Foundation course covering object-oriented programming with C++. Credential ID: ETHSU00432",
        skills: ["C++", "OOP", "Programming", "Software Development"],
        credentialUrl: null,
        downloadUrl: "./Images/Certs/ethnotechcpp.png"
    }
];

// Track loaded projects
let loadedProjectCount = 6; // Initially loaded 6 projects (including hardcoded ones)
const projectsPerLoad = 3;
const allProjects = [...sampleProjects, ...moreProjects];

// Track loaded achievements
let loadedAchievementCount = 3; // Initially load 3 achievements (1 row)
const achievementsPerLoad = 3;
const allAchievements = [...achievementsData, ...moreAchievements];

// Track loaded publications
let loadedPublicationCount = 2; // Initially load 2 publications (1 row)
const publicationsPerLoad = 2;
const allPublications = [...publicationsData, ...morePublications];

// Track loaded certificates
let loadedCertificateCount = 4; // Initially load 4 certificates (2 rows)
const certificatesPerLoad = 2;
const allCertificates = [...certificatesData, ...moreCertificates];

// Initialize: Add all projects to projectsData initially
allProjects.forEach(project => {
    projectsData[project.id] = project;
});

// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Update icon
    const icon = themeToggle.querySelector('i');
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Mobile menu functionality
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');
const menuClose = document.getElementById('menuClose');

// Open menu
hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    overlay.classList.add('active');

    // Update hamburger icon
    const icon = hamburger.querySelector('i');
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
});

// Close menu with X button
menuClose.addEventListener('click', () => {
    closeMobileMenu();
});

// Close menu when clicking on overlay
overlay.addEventListener('click', () => {
    closeMobileMenu();
});

// Close menu when clicking on a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        closeMobileMenu();
    });
});

// Function to close mobile menu
function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');

    // Update hamburger icon
    const icon = hamburger.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
}

// Background animation with falling tech logos
const backgroundAnimation = document.getElementById('backgroundAnimation');
const techLogos = [
    { icon: 'fab fa-html5', name: 'HTML5' },
    { icon: 'fab fa-css3-alt', name: 'CSS3' },
    { icon: 'fab fa-js', name: 'JavaScript' },
    { icon: 'fab fa-react', name: 'React' },
    { icon: 'fab fa-node-js', name: 'Node.js' },
    { icon: 'fab fa-python', name: 'Python' },
    { icon: 'fab fa-git-alt', name: 'Git' },
    { icon: 'fab fa-docker', name: 'Docker' }
];

function createFallingTechLogo() {
    const logo = document.createElement('div');
    logo.className = 'tech-logo';

    // Randomly select a tech logo
    const randomTech = techLogos[Math.floor(Math.random() * techLogos.length)];
    logo.innerHTML = `<i class="${randomTech.icon}"></i>`;

    // Random size
    const size = Math.random() * 2 + 1.5; // 1.5rem to 3.5rem
    logo.style.fontSize = `${size}rem`;

    // Random horizontal position
    const leftPos = Math.random() * 100;
    logo.style.left = `${leftPos}%`;

    // Random animation duration and delay
    const duration = Math.random() * 15 + 10; // 10s to 25s
    const delay = Math.random() * 5; // 0s to 5s

    logo.style.animation = `falling ${duration}s ${delay}s linear infinite`;

    backgroundAnimation.appendChild(logo);

    // Remove logo after animation completes to prevent DOM overload
    setTimeout(() => {
        if (logo.parentNode) {
            logo.parentNode.removeChild(logo);
        }
    }, (duration + delay) * 1000);
}

// Create falling tech logos continuously
function startFallingAnimation() {
    // Create initial logos
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            createFallingTechLogo();
        }, i * 1000);
    }

    // Continue creating logos at intervals
    setInterval(() => {
        createFallingTechLogo();
    }, 1500);
}

// Start the animation
startFallingAnimation();

// Tech stack scrolling animation
const techScroll = document.getElementById('techScroll');

// Complete tech stack with FontAwesome icons (real logos as fallback)
const techStack = [
    { type: 'icon', value: 'fab fa-html5', name: 'HTML5' },
    { type: 'icon', value: 'fab fa-css3-alt', name: 'CSS3' },
    { type: 'icon', value: 'fab fa-js', name: 'JavaScript' },
    { type: 'icon', value: 'fab fa-bootstrap', name: 'Bootstrap' },
    { type: 'icon', value: 'fab fa-python', name: 'Python' },
    { type: 'icon', value: 'fab fa-java', name: 'Java' },
    { type: 'icon', value: 'fas fa-database', name: 'MySQL' },
    { type: 'icon', value: 'fab fa-react', name: 'React' },
    { type: 'icon', value: 'fab fa-node-js', name: 'Node.js' },
    { type: 'icon', value: 'fab fa-aws', name: 'AWS' },
    { type: 'icon', value: 'fab fa-docker', name: 'Docker' },
    { type: 'icon', value: 'fab fa-git-alt', name: 'Git' },
    { type: 'icon', value: 'fab fa-npm', name: 'NPM' },
    { type: 'icon', value: 'fab fa-github', name: 'GitHub' },
    { type: 'icon', value: 'fab fa-sass', name: 'Sass' },
    { type: 'icon', value: 'fab fa-figma', name: 'Figma' },
    // Tailwind CSS - no FontAwesome icon, use real logo
    { type: 'logo', value: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', name: 'Tailwind CSS' },
    // Django - no FontAwesome icon, use real logo
    { type: 'logo', value: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', name: 'Django' },
    // Flask - no FontAwesome icon, use real logo
    { type: 'logo', value: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg', name: 'Flask' },
    { type: 'icon', value: 'fab fa-facebook', name: 'Meta Ads' },
    // Google Ads - no FontAwesome icon, use real logo
    { type: 'logo', value: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googleads.svg', name: 'Google Ads' },
    // SEO - no FontAwesome icon, use real logo
    { type: 'logo', value: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/seo.svg', name: 'SEO' },
    // Wix Studio - no FontAwesome icon, use real logo
    { type: 'logo', value: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/wix.svg', name: 'Wix Studio' },
    { type: 'icon', value: 'fas fa-shopping-cart', name: 'Shopify' },
    { type: 'icon', value: 'fab fa-wordpress', name: 'WordPress' },
    // WooCommerce - no FontAwesome icon, use real logo
    { type: 'logo', value: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/woocommerce.svg', name: 'WooCommerce' },
    // NumPy - no FontAwesome icon, use real logo
    { type: 'logo', value: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', name: 'NumPy' },
    // Pandas - no FontAwesome icon, use real logo
    { type: 'logo', value: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', name: 'Pandas' },
    // Scikit-learn - no FontAwesome icon, use real logo
    { type: 'logo', value: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/scikitlearn.svg', name: 'Scikit-learn' },
    // Prompt Engineering - no FontAwesome icon, use brain icon
    { type: 'icon', value: 'fas fa-brain', name: 'Prompt Engineering' },
    { type: 'icon', value: 'fas fa-cloud', name: 'Cloud Computing' },
    { type: 'icon', value: 'fas fa-shield-alt', name: 'Cybersecurity' },
    { type: 'icon', value: 'fas fa-laptop-code', name: 'Data Science' },
    { type: 'icon', value: 'fab fa-cuttlefish', name: 'C' },
    { type: 'icon', value: 'fab fa-cuttlefish', name: 'C++' }
];

// Create tech cards and duplicate for seamless scrolling
function createTechCards() {
    // Add original set
    techStack.forEach(tech => {
        const card = document.createElement('div');
        card.className = 'tech-card';

        if (tech.type === 'icon') {
            card.innerHTML = `
                <i class="${tech.value} tech-icon"></i>
                <span>${tech.name}</span>
            `;
        } else {
            card.innerHTML = `
                <img src="${tech.value}" alt="${tech.name}" class="tech-logo-img">
                <span>${tech.name}</span>
            `;
        }

        techScroll.appendChild(card);
    });

    // Add duplicate set for seamless scrolling
    techStack.forEach(tech => {
        const card = document.createElement('div');
        card.className = 'tech-card';

        if (tech.type === 'icon') {
            card.innerHTML = `
                <i class="${tech.value} tech-icon"></i>
                <span>${tech.name}</span>
            `;
        } else {
            card.innerHTML = `
                <img src="${tech.value}" alt="${tech.name}" class="tech-logo-img">
                <span>${tech.name}</span>
            `;
        }

        techScroll.appendChild(card);
    });
}

// Initialize tech cards
createTechCards();

// Image loading optimization for education section
document.addEventListener('DOMContentLoaded', function () {
    // Add loading state to images
    const images = document.querySelectorAll('.timeline-marker img');

    images.forEach(img => {
        const marker = img.parentElement;

        // Show loading state
        if (!img.complete) {
            marker.classList.add('loading');
        }

        img.addEventListener('load', function () {
            marker.classList.remove('loading');
        });

        img.addEventListener('error', function () {
            marker.classList.remove('loading');
            // You could add a fallback image here if needed
        });
    });

    // Performance optimization - defer non-critical animations
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);

    // Load initial achievements
    loadInitialAchievements();

    // Load initial publications
    loadInitialPublications();

    // Load initial certificates
    loadInitialCertificates();

    // Update view more button if all achievements are initially loaded
    if (loadedAchievementCount >= allAchievements.length) {
        const viewMoreBtn = document.getElementById('viewMoreAchievementsBtn');
        viewMoreBtn.innerHTML = '<i class="fas fa-check-circle"></i> All Achievements Loaded';
        viewMoreBtn.disabled = true;
        viewMoreBtn.style.opacity = '0.7';
        viewMoreBtn.style.cursor = 'default';
        viewMoreBtn.onclick = null;
    }

    // Update view more button if all publications are initially loaded
    if (loadedPublicationCount >= allPublications.length) {
        const viewMoreBtn = document.getElementById('viewMorePublicationsBtn');
        viewMoreBtn.innerHTML = '<i class="fas fa-check-circle"></i> All Publications Loaded';
        viewMoreBtn.disabled = true;
        viewMoreBtn.style.opacity = '0.7';
        viewMoreBtn.style.cursor = 'default';
        viewMoreBtn.onclick = null;
    }

    // Update view more button if all certificates are initially loaded
    if (loadedCertificateCount >= allCertificates.length) {
        const viewMoreBtn = document.getElementById('viewMoreCertificatesBtn');
        viewMoreBtn.innerHTML = '<i class="fas fa-check-circle"></i> All Certificates Loaded';
        viewMoreBtn.disabled = true;
        viewMoreBtn.style.opacity = '0.7';
        viewMoreBtn.style.cursor = 'default';
        viewMoreBtn.onclick = null;
    }
});

// Smooth scrolling for any anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Show project details in popup
function showProjectDetails(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    const popup = document.getElementById('projectDetailsPopup');
    const container = document.getElementById('projectDetailsContainer');

    // Create popup content
    let demoBtnAction = '';
    if (project.isWIP) {
        demoBtnAction = `onclick="handleDemoClick(event, '${project.demoUrl}', true)"`;
    } else {
        demoBtnAction = `onclick="handleDemoClick(event, ${project.demoUrl ? `'${project.demoUrl}'` : 'null'})"`;
    }

    container.innerHTML = `
        <div class="popup-project-media">
            ${project.video ?
            `<video controls autoplay loop muted playsinline>
                    <source src="${project.video}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>` :
            `<img src="${project.image}" alt="${project.name}" loading="lazy">`
        }

        </div>
        <div class="popup-project-info">
            <h3 class="popup-project-name">${project.name}</h3>
            <p class="popup-detailed-brief">${project.detailedBrief}</p>
            
            <div class="team-section">
                <h4 class="section-title">
                    <i class="fas fa-users"></i> Team Members
                </h4>
                <div class="team-members">
                    ${project.team.map(member => `
                        <div class="team-member">
                            <i class="fas fa-user"></i> ${member}
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="stack-section">
                <h4 class="section-title">
                    <i class="fas fa-code"></i> Technical Stack
                </h4>
                <div class="tech-stack-list">
                    ${project.techStack.map(tech => `
                        <span class="tech-tag">${tech}</span>
                    `).join('')}
                </div>
            </div>
            
            <div class="popup-project-buttons">
                <a href="#" class="popup-project-btn demo" ${demoBtnAction}>
                    <i class="fas fa-external-link-alt"></i> Live Demo
                </a>
                ${project.githubUrl ? `<a href="${project.githubUrl}" class="popup-project-btn github" target="_blank">
                    <i class="fab fa-github"></i> View Source Code
                </a>` : ''}
            </div>
        </div>
    `;

    // Show popup
    popup.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close project details popup
function closeProjectDetails() {
    const popup = document.getElementById('projectDetailsPopup');
    popup.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close popup when clicking outside
document.getElementById('projectDetailsPopup').addEventListener('click', function (e) {
    if (e.target === this) {
        closeProjectDetails();
    }
});

// Add wipUrl global variable
let currentWipUrl = '';

// Handle demo click with popup for unavailable demos or WIP projects
function handleDemoClick(event, demoUrl, isWIP = false) {
    event.preventDefault();

    if (isWIP) {
        currentWipUrl = demoUrl;
        document.getElementById('wipPopup').classList.add('active');
    } else if (demoUrl && demoUrl !== 'null' && demoUrl !== 'undefined') {
        // Open demo in new tab
        window.open(demoUrl, '_blank');
    } else {
        // Show popup for unavailable demo
        showDemoPopup();
    }
}

// Show demo unavailable popup
function showDemoPopup() {
    const popup = document.getElementById('demoPopup');
    popup.classList.add('active');
}

// Close demo popup
function closeDemoPopup() {
    const popup = document.getElementById('demoPopup');
    popup.classList.remove('active');
}

// Close WIP popup
function closeWipPopup() {
    const popup = document.getElementById('wipPopup');
    popup.classList.remove('active');
}

// Wip popup proceed connection
document.addEventListener('DOMContentLoaded', () => {
    const proceedWipBtn = document.getElementById('proceedWipBtn');
    if (proceedWipBtn) {
        proceedWipBtn.addEventListener('click', () => {
            closeWipPopup();
            if (currentWipUrl) {
                window.open(currentWipUrl, '_blank');
            }
        });
    }
});

// Popup logic for demos and other UI elements handled above
// Close popup when clicking outside
document.getElementById('demoPopup').addEventListener('click', function (e) {
    if (e.target === this) {
        closeDemoPopup();
    }
});

// Close popup with Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeProjectDetails();
        closeDemoPopup();
        closeVerifyPopup();
        closeCertificateModal();
        closeAchievementDetails();
        closeWipPopup();
        closeResumePopup();
    }
});

// Resume popup functions
function openResumePopup() {
    document.getElementById('resumePopup').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeResumePopup() {
    document.getElementById('resumePopup').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close resume popup when clicking outside
document.addEventListener('DOMContentLoaded', function () {
    const resumePopup = document.getElementById('resumePopup');
    if (resumePopup) {
        resumePopup.addEventListener('click', function (e) {
            if (e.target === this) {
                closeResumePopup();
            }
        });
    }
});


// Function to add project card
function addProjectCard(project) {
    const projectsGrid = document.getElementById('projectsGrid');

    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.dataset.id = project.id;

    projectCard.innerHTML = `
        <div class="project-media">
            ${project.video
            ? `<video controls autoplay loop muted playsinline><source src="${project.video}" type="video/mp4">Your browser does not support the video tag.</video>`
            : `<img src="${project.image}" alt="${project.name}" loading="lazy">`}
        </div>
        <div class="project-info">
            <h3 class="project-name">${project.name}</h3>
            <p class="project-brief">${project.brief}</p>
            <div class="project-buttons">
                <a href="#" class="project-btn demo" data-project="${project.id}" onclick="handleDemoClick(event, '${project.demoUrl}', ${project.isWIP ? true : false})">
                    <i class="fas fa-external-link-alt"></i> View Demo
                </a>
                ${project.githubUrl ? `<a href="${project.githubUrl}" class="project-btn github" target="_blank">
                    <i class="fab fa-github"></i> GitHub
                </a>` : ''}
                <button class="project-btn details" onclick="showProjectDetails(${project.id})">
                    <i class="fas fa-info-circle"></i> Details
                </button>
            </div>
        </div>
    `;

    projectsGrid.appendChild(projectCard);
}

// Load more projects function
function loadMoreProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    const viewMoreBtn = document.getElementById('viewMoreBtn');

    // Calculate how many more projects to load (offset by 3 hardcoded projects)
    const extraProjectsLoaded = loadedProjectCount - 3;
    const nextBatch = allProjects.slice(extraProjectsLoaded, extraProjectsLoaded + projectsPerLoad);

    if (nextBatch.length === 0) {
        // No more projects to load
        viewMoreBtn.innerHTML = '<i class="fas fa-check-circle"></i> All Projects Loaded';
        viewMoreBtn.disabled = true;
        viewMoreBtn.style.opacity = '0.7';
        viewMoreBtn.style.cursor = 'default';
        viewMoreBtn.onclick = null;
        return;
    }

    // Add each project from the batch
    nextBatch.forEach(project => {
        addProjectCard(project);
        loadedProjectCount++;
    });

    // Update button text if approaching the end
    const remainingProjects = allProjects.length - (loadedProjectCount - 3);
    if (remainingProjects <= projectsPerLoad) {
        viewMoreBtn.innerHTML = `<i class="fas fa-spinner"></i> Load Last ${remainingProjects} Projects`;
    }

    // Hide button if all projects are loaded
    if ((loadedProjectCount - 3) >= allProjects.length) {
        viewMoreBtn.innerHTML = '<i class="fas fa-check-circle"></i> All Projects Loaded';
        viewMoreBtn.disabled = true;
        viewMoreBtn.style.opacity = '0.7';
        viewMoreBtn.style.cursor = 'default';
        viewMoreBtn.onclick = null;
    }

    // Smooth scroll to the newly added projects
    const lastProject = projectsGrid.lastElementChild;
    if (lastProject) {
        lastProject.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// NEW: Function to create achievement card
function createAchievementCard(achievement) {
    const card = document.createElement('div');
    card.className = 'achievement-card';
    card.dataset.id = achievement.id;

    card.innerHTML = `
        <div class="achievement-media">
            <img src="${achievement.image}" alt="${achievement.name}" loading="lazy">
        </div>
        <div class="achievement-info">
            <h3 class="achievement-name">${achievement.name}</h3>
            <div class="achievement-organization">${achievement.organization}</div>
            <div class="achievement-date">${achievement.date}</div>
            <p class="achievement-brief">${achievement.brief}</p>
            <div class="achievement-buttons">
                <button class="achievement-btn details" onclick="showAchievementDetails(${achievement.id})">
                    <i class="fas fa-info-circle"></i> View Details
                </button>
            </div>
        </div>
    `;

    return card;
}

// NEW: Function to load initial achievements
function loadInitialAchievements() {
    const achievementsGrid = document.getElementById('achievementsGrid');

    // Load first 3 achievements
    const initialAchievements = allAchievements.slice(0, loadedAchievementCount);

    initialAchievements.forEach(achievement => {
        const card = createAchievementCard(achievement);
        achievementsGrid.appendChild(card);
    });
}

// NEW: Function to load more achievements
function loadMoreAchievements() {
    const achievementsGrid = document.getElementById('achievementsGrid');
    const viewMoreBtn = document.getElementById('viewMoreAchievementsBtn');

    // Calculate how many more achievements to load
    const nextBatch = allAchievements.slice(
        loadedAchievementCount,
        loadedAchievementCount + achievementsPerLoad
    );

    if (nextBatch.length === 0) {
        // No more achievements to load
        viewMoreBtn.innerHTML = '<i class="fas fa-check-circle"></i> All Achievements Loaded';
        viewMoreBtn.disabled = true;
        viewMoreBtn.style.opacity = '0.7';
        viewMoreBtn.style.cursor = 'default';
        viewMoreBtn.onclick = null;
        return;
    }

    // Add each achievement from the batch
    nextBatch.forEach(achievement => {
        const card = createAchievementCard(achievement);
        achievementsGrid.appendChild(card);
        loadedAchievementCount++;
    });

    // Update button text if approaching the end
    const remainingAchievements = allAchievements.length - loadedAchievementCount;
    if (remainingAchievements <= achievementsPerLoad) {
        viewMoreBtn.innerHTML = `<i class="fas fa-spinner"></i> Load Last ${remainingAchievements} Achievements`;
    }

    // Hide button if all achievements are loaded
    if (loadedAchievementCount >= allAchievements.length) {
        viewMoreBtn.innerHTML = '<i class="fas fa-check-circle"></i> All Achievements Loaded';
        viewMoreBtn.disabled = true;
        viewMoreBtn.style.opacity = '0.7';
        viewMoreBtn.style.cursor = 'default';
        viewMoreBtn.onclick = null;
    }

    // Smooth scroll to the newly added achievements
    const lastAchievement = achievementsGrid.lastElementChild;
    if (lastAchievement) {
        lastAchievement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// NEW: Function to show achievement details
function showAchievementDetails(achievementId) {
    const achievement = allAchievements.find(a => a.id === achievementId);
    if (!achievement) return;

    const popup = document.getElementById('achievementDetailsPopup');
    const container = document.getElementById('achievementDetailsContainer');

    // Create popup content
    let leftColumnContent = '';

    if (achievement.gallery && achievement.gallery.length > 0) {
        const [featured, ...thumbnails] = achievement.gallery;

        leftColumnContent = `
            <div class="popup-featured-image" onclick="openLightbox('${featured}')">
                <img src="${featured}" alt="${achievement.name}" loading="lazy">
            </div>
            
            <div class="popup-thumbnail-grid">
                ${thumbnails.map(img => `
                    <div class="popup-thumbnail" onclick="openLightbox('${img}')">
                        <img src="${img}" alt="${achievement.name}" loading="lazy">
                    </div>
                `).join('')}
            </div>
        `;
    } else {
        leftColumnContent = `
            <div class="popup-featured-image">
                <img src="${achievement.certificateImage}" alt="${achievement.name}" loading="lazy">
            </div>
        `;
    }

    container.innerHTML = `
        <div class="popup-layout">
            <div class="popup-left">
                ${leftColumnContent}
                
                <div class="popup-buttons left-buttons">
                    ${achievement.demoUrl ? `
                    <a href="#" class="achievement-action-btn demo-btn" onclick="handleDemoClick(event, '${achievement.demoUrl}')">
                         <i class="fas fa-external-link-alt"></i> View Demo
                    </a>` : ''}
                    
                    ${achievement.githubUrl ? `
                    <a href="${achievement.githubUrl}" class="achievement-action-btn github-btn" target="_blank">
                        <i class="fab fa-github"></i> GitHub
                    </a>` : ''}
                </div>
            </div>
            
            <div class="popup-right">
                <h3 class="achievement-popup-name">${achievement.name}</h3>
                <div class="achievement-popup-organization">${achievement.organization}</div>
                <div class="achievement-popup-date">${achievement.date}</div>
                
                <p class="achievement-popup-description">
                    ${achievement.details}
                </p>

                ${achievement.team ? `
                <div class="achievement-details-list">
                    <div class="achievement-detail-item">
                        <i class="fas fa-users"></i>
                        <span><strong>Team:</strong> ${achievement.team.join(', ')}</span>
                    </div>
                </div>` : ''}
                
                <div class="achievement-details-list">
                    ${achievement.additionalInfo.map(info => `
                        <div class="achievement-detail-item">
                            <i class="fas fa-check-circle"></i>
                            <span>${info}</span>
                        </div>
                    `).join('')}
                </div>
                
                <div class="achievement-details-list">
                    <div class="achievement-detail-item">
                        <i class="fas fa-star"></i>
                        <span><strong>Skills Demonstrated:</strong> ${achievement.skills.join(', ')}</span>
                    </div>
                </div>
                
                <div class="popup-buttons right-buttons">
                    <a href="${achievement.linkedinUrl || '#'}" class="achievement-action-btn linkedin-btn" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-linkedin-in"></i> LinkedIn Post
                    </a>

                    <a href="${achievement.certificateUrl}" class="achievement-action-btn download-btn" download>
                         <i class="fas fa-download"></i> Certificate
                    </a>
                </div>
            </div>
        </div>
    `;

    // Show popup
    popup.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Lightbox Functions
function openLightbox(imgSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImage');

    lightboxImg.src = imgSrc;
    lightbox.style.display = 'block';
    // Small delay to allow display:block to apply before adding opacity
    setTimeout(() => {
        lightbox.classList.add('active');
    }, 10);
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    setTimeout(() => {
        lightbox.style.display = 'none';
    }, 300); // Match transition duration
}

// Close lightbox on click outside
document.getElementById('lightbox').addEventListener('click', function (e) {
    if (e.target === this) {
        closeLightbox();
    }
});

// NEW: Function to close achievement details
function closeAchievementDetails() {
    const popup = document.getElementById('achievementDetailsPopup');
    popup.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// NEW: Close achievement popup when clicking outside
document.getElementById('achievementDetailsPopup').addEventListener('click', function (e) {
    if (e.target === this) {
        closeAchievementDetails();
    }
});

// Function to create publication card
function createPublicationCard(publication) {
    const card = document.createElement('div');
    card.className = 'publication-card';
    card.dataset.id = publication.id;

    card.innerHTML = `
        <div class="publication-content">
            <span class="publication-type">${publication.type}</span>
            
            <h3 class="publication-name">${publication.name}</h3>
            
            <div class="publication-authors">
                <span class="authors-label">Authors:</span> ${publication.authors}
            </div>
            
            <div class="publication-details">
                <div class="detail-item">
                    <i class="fas ${publication.isChapter ? 'fa-book' : 'fa-file-alt'}"></i>
                    <span>
                        ${publication.isChapter ?
            `Chapter in: <strong>${publication.book}</strong>` :
            `Published in: <strong>${publication.journal || publication.conference}</strong>`
        }
                    </span>
                </div>
                
                ${publication.publisher ? `
                    <div class="detail-item">
                        <i class="fas fa-building"></i>
                        <span>Publisher: <strong>${publication.publisher}</strong></span>
                    </div>
                ` : ''}
                
                <div class="detail-item">
                    <i class="fas fa-link"></i>
                    <span>
                        DOI: <a href="${publication.doi}" class="doi-link" target="_blank">${publication.doi.split('//')[1]}</a>
                    </span>
                </div>
            </div>
            
            <div class="publication-footer">
                <div class="publication-date">Published: ${publication.date}</div>
                <div class="publication-actions">
                    <a href="${publication.readUrl}" class="publication-btn read" target="_blank">
                        <i class="fas fa-book-open"></i> Read Paper
                    </a>
                    <button class="publication-btn cite" onclick="copyCitation(${publication.id})">
                        <i class="fas fa-quote-right"></i> Copy Citation
                    </button>
                </div>
            </div>
        </div>
    `;

    return card;
}

// Function to load initial publications
function loadInitialPublications() {
    const publicationsGrid = document.getElementById('publicationsGrid');

    // Load first 2 publications
    const initialPublications = allPublications.slice(0, loadedPublicationCount);

    initialPublications.forEach(publication => {
        const card = createPublicationCard(publication);
        publicationsGrid.appendChild(card);
    });
}

// Function to load more publications
function loadMorePublications() {
    const publicationsGrid = document.getElementById('publicationsGrid');
    const viewMoreBtn = document.getElementById('viewMorePublicationsBtn');

    // Calculate how many more publications to load
    const nextBatch = allPublications.slice(
        loadedPublicationCount,
        loadedPublicationCount + publicationsPerLoad
    );

    if (nextBatch.length === 0) {
        // No more publications to load
        viewMoreBtn.innerHTML = '<i class="fas fa-check-circle"></i> All Publications Loaded';
        viewMoreBtn.disabled = true;
        viewMoreBtn.style.opacity = '0.7';
        viewMoreBtn.style.cursor = 'default';
        viewMoreBtn.onclick = null;
        return;
    }

    // Add each publication from the batch
    nextBatch.forEach(publication => {
        const card = createPublicationCard(publication);
        publicationsGrid.appendChild(card);
        loadedPublicationCount++;
    });

    // Update button text if approaching the end
    const remainingPublications = allPublications.length - loadedPublicationCount;
    if (remainingPublications <= publicationsPerLoad) {
        viewMoreBtn.innerHTML = `<i class="fas fa-spinner"></i> Load Last ${remainingPublications} Publications`;
    }

    // Hide button if all publications are loaded
    if (loadedPublicationCount >= allPublications.length) {
        viewMoreBtn.innerHTML = '<i class="fas fa-check-circle"></i> All Publications Loaded';
        viewMoreBtn.disabled = true;
        viewMoreBtn.style.opacity = '0.7';
        viewMoreBtn.style.cursor = 'default';
        viewMoreBtn.onclick = null;
    }

    // Smooth scroll to the newly added publications
    const lastPublication = publicationsGrid.lastElementChild;
    if (lastPublication) {
        lastPublication.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// Function to copy citation to clipboard
function copyCitation(publicationId) {
    const publication = allPublications.find(p => p.id === publicationId);
    if (!publication) return;

    navigator.clipboard.writeText(publication.citation)
        .then(() => {
            // Show success message
            const button = event.target.closest('.publication-btn.cite');
            const originalHtml = button.innerHTML;
            button.innerHTML = '<i class="fas fa-check"></i> Copied!';
            button.style.background = 'linear-gradient(135deg, #28a745, #20c997)';

            setTimeout(() => {
                button.innerHTML = originalHtml;
                button.style.background = '';
            }, 2000);
        })
        .catch(err => {
            console.error('Failed to copy citation: ', err);
            alert('Failed to copy citation. Please try again.');
        });
}

// Function to create certificate card
function createCertificateCard(certificate) {
    const card = document.createElement('div');
    card.className = 'certificate-card';
    card.dataset.id = certificate.id;

    card.innerHTML = `
        <div class="certificate-content">
            <div class="certificate-header">
                <div class="certificate-logo">
                    <img src="${certificate.logo}" alt="${certificate.issuer}" loading="lazy">
                </div>
                <div class="certificate-title">
                    <h3 class="certificate-name">${certificate.name}</h3>
                    <div class="certificate-issuer">${certificate.issuer}</div>
                    <div class="certificate-date">Issued: ${certificate.date}</div>
                </div>
            </div>
            
            <p class="certificate-description">
                ${certificate.description}
            </p>
            
            <div class="certificate-footer">
                <div class="certificate-skills">
                    ${certificate.skills.slice(0, 3).map(skill =>
        `<span class="skill-tag">${skill}</span>`
    ).join('')}
                    ${certificate.skills.length > 3 ?
            `<span class="skill-tag">+${certificate.skills.length - 3} more</span>` : ''
        }
                </div>
                <div class="certificate-actions">
                    <button class="certificate-btn" onclick="viewCertificate(${certificate.id})">
                        <i class="fas fa-eye"></i> View Details
                    </button>
                </div>
            </div>
        </div>
    `;

    return card;
}

// Function to load initial certificates
function loadInitialCertificates() {
    const certificatesGrid = document.getElementById('certificatesGrid');

    // Load first 4 certificates
    const initialCertificates = allCertificates.slice(0, loadedCertificateCount);

    initialCertificates.forEach(certificate => {
        const card = createCertificateCard(certificate);
        certificatesGrid.appendChild(card);
    });
}

// Function to load more certificates
function loadMoreCertificates() {
    const certificatesGrid = document.getElementById('certificatesGrid');
    const viewMoreBtn = document.getElementById('viewMoreCertificatesBtn');

    // Calculate how many more certificates to load
    const nextBatch = allCertificates.slice(
        loadedCertificateCount,
        loadedCertificateCount + certificatesPerLoad
    );

    if (nextBatch.length === 0) {
        // No more certificates to load
        viewMoreBtn.innerHTML = '<i class="fas fa-check-circle"></i> All Certificates Loaded';
        viewMoreBtn.disabled = true;
        viewMoreBtn.style.opacity = '0.7';
        viewMoreBtn.style.cursor = 'default';
        viewMoreBtn.onclick = null;
        return;
    }

    // Add each certificate from the batch
    nextBatch.forEach(certificate => {
        const card = createCertificateCard(certificate);
        certificatesGrid.appendChild(card);
        loadedCertificateCount++;
    });

    // Update button text if approaching the end
    const remainingCertificates = allCertificates.length - loadedCertificateCount;
    if (remainingCertificates <= certificatesPerLoad) {
        viewMoreBtn.innerHTML = `<i class="fas fa-spinner"></i> Load Last ${remainingCertificates} Certificates`;
    }

    // Hide button if all certificates are loaded
    if (loadedCertificateCount >= allCertificates.length) {
        viewMoreBtn.innerHTML = '<i class="fas fa-check-circle"></i> All Certificates Loaded';
        viewMoreBtn.disabled = true;
        viewMoreBtn.style.opacity = '0.7';
        viewMoreBtn.style.cursor = 'default';
        viewMoreBtn.onclick = null;
    }

    // Smooth scroll to the newly added certificates
    const lastCertificate = certificatesGrid.lastElementChild;
    if (lastCertificate) {
        lastCertificate.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// Function to view certificate details
function viewCertificate(certificateId) {
    const certificate = allCertificates.find(c => c.id === certificateId);
    if (!certificate) return;

    const modal = document.getElementById('certificateModal');
    const modalBody = document.getElementById('certificateModalBody');

    modalBody.innerHTML = `
        <div class="certificate-modal-image">
            <img src="${certificate.image}" alt="${certificate.name}" loading="lazy">
        </div>
        <div class="certificate-modal-details">
            <h3 class="certificate-modal-name">${certificate.name}</h3>
            <div class="certificate-modal-issuer">${certificate.issuer}</div>
            <div class="certificate-modal-date">Issued: ${certificate.date}</div>
            
            <p class="certificate-modal-description">
                ${certificate.description}
            </p>
            
            <div class="certificate-modal-skills">
                ${certificate.skills.map(skill =>
        `<span class="certificate-modal-tag">${skill}</span>`
    ).join('')}
            </div>
            
            <div class="certificate-modal-actions">
                <a href="#" class="certificate-modal-btn view" onclick="handleVerifyClick(event, ${certificate.credentialUrl ? `'${certificate.credentialUrl}'` : 'null'})">
                    <i class="fas fa-external-link-alt"></i> Verify Credential
                </a>
                <a href="${certificate.downloadUrl}" class="certificate-modal-btn download" download>
                    <i class="fas fa-download"></i> Download Certificate
                </a>
            </div>
        </div>
    `;

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Function to close certificate modal
function closeCertificateModal() {
    const modal = document.getElementById('certificateModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.getElementById('certificateModal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeCertificateModal();
    }
});

// NEW: Handle certificate verification click
function handleVerifyClick(event, credentialUrl) {
    event.preventDefault();
    if (credentialUrl && credentialUrl !== 'null') {
        window.open(credentialUrl, '_blank');
    } else {
        const popup = document.getElementById('verifyPopup');
        popup.classList.add('active');
    }
}

// NEW: Close verification popup
function closeVerifyPopup() {
    const popup = document.getElementById('verifyPopup');
    popup.classList.remove('active');
}

// NEW: Close popup when clicking outside
document.getElementById('verifyPopup').addEventListener('click', function (e) {
    if (e.target === this) {
        closeVerifyPopup();
    }
});

// Footer year update
document.addEventListener('DOMContentLoaded', function () {
    const copyrightElement = document.querySelector('.copyright');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.innerHTML = copyrightElement.innerHTML.replace('2024', currentYear);
    }
});

/* ========================================
   Contact Form Handling
   ======================================== */

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (!contactForm) return;

    // Clear field error
    function clearError(id) {
        const el = document.getElementById(id);
        if (el) { el.textContent = ''; el.style.display = 'none'; }
        const input = document.getElementById(id.replace('Error', ''));
        if (input) input.classList.remove('invalid');
    }

    // Show field error
    function showError(inputId, errorId, msg) {
        const el = document.getElementById(errorId);
        if (el) { el.textContent = msg; el.style.display = 'block'; }
        const input = document.getElementById(inputId);
        if (input) { input.classList.add('invalid'); input.style.borderColor = 'rgba(244, 67, 54, 0.6)'; }
    }

    // Clear all field errors
    function clearAllErrors() {
        ['name', 'email', 'phone', 'subject', 'message'].forEach(f => {
            clearError(f + 'Error');
        });
    }

    // Validate all fields, returns true if valid
    function validateAll() {
        let valid = true;
        clearAllErrors();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || name.length < 2) {
            showError('name', 'nameError', 'Please enter your full name (min 2 characters).');
            valid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            showError('email', 'emailError', 'Please enter your email address.');
            valid = false;
        } else if (!emailRegex.test(email)) {
            showError('email', 'emailError', 'Please enter a valid email address.');
            valid = false;
        }

        if (!phone || phone.length < 7) {
            showError('phone', 'phoneError', 'Please enter a valid phone number.');
            valid = false;
        }

        if (!subject || subject.length < 3) {
            showError('subject', 'subjectError', 'Please enter what you are interested in.');
            valid = false;
        }

        if (!message || message.length < 10) {
            showError('message', 'messageError', 'Please enter a message (min 10 characters).');
            valid = false;
        }

        return valid;
    }

    // Live validation on blur
    ['name', 'email', 'phone', 'subject', 'message'].forEach(function(fieldId) {
        const input = document.getElementById(fieldId);
        if (!input) return;
        input.addEventListener('blur', function() { validateAll(); });
        input.addEventListener('input', function() {
            if (this.classList.contains('invalid')) validateAll();
        });
    });

    // Form submit
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        if (!validateAll()) {
            showFormMessage('Please fix the errors above before sending.', 'error');
            return;
        }

        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        formMessage.style.display = 'none';

        const formData = new FormData(contactForm);

        fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success === 'true' || data.success === true) {
                showFormMessage('✅ Thank you! Your message has been sent. I\'ll get back to you soon.', 'success');
                contactForm.reset();
                clearAllErrors();
            } else {
                showFormMessage('❌ Something went wrong. Please try again or email me directly.', 'error');
            }
        })
        .catch(() => {
            showFormMessage('❌ Connection error. Please check your internet or email me directly at vishnukookkal@gmail.com.', 'error');
        })
        .finally(() => {
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
            setTimeout(() => { formMessage.style.display = 'none'; }, 10000);
        });
    });
});

// Show form banner message
function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    if (!formMessage) return;
    formMessage.textContent = message;
    formMessage.className = 'form-message ' + type;
    formMessage.style.display = 'block';
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

