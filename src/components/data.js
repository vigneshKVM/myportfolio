export const personalInfo = {
  name: 'Vignesh Moorthy K',
  title: 'Senior Software Engineer',
  subtitle: 'Full Stack Developer & Mobile Engineer',
  tagline: 'Designing scalable systems, not just building features.',
  email: 'vigneshmoorthykvm@gmail.com',
  phone: '+91-8344420440',
  github: 'https://github.com/vigneshKVM',
  linkedin: 'https://www.linkedin.com/in/vignesh-moorthy',
  resume: '/VigneshMoorthy.pdf',
  location: 'Chennai, India',
  yearsOfExperience: '6+',
};

export const skills = [
  {
    category: 'Frontend',
    icon: '⚛️',
    items: [
      { name: 'React.js', level: 95 },
      { name: 'React Native', level: 85 },
      { name: 'Next.js', level: 82 },
      { name: 'TypeScript', level: 80 },
      { name: 'Redux / Redux-Saga', level: 88 },
    ],
  },
  {
    category: 'Backend',
    icon: '🔧',
    items: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 88 },
      { name: 'AWS Lambda', level: 75 },
      { name: 'REST APIs', level: 92 },
      { name: 'Socket.io', level: 72 },
    ],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁️',
    items: [
      { name: 'AWS (EC2, IAM, Lambda)', level: 78 },
      { name: 'Firebase', level: 78 },
      { name: 'CI/CD (GitHub Actions)', level: 82 },
      { name: 'Docker', level: 70 },
      { name: 'SonarCloud', level: 65 },
    ],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    items: [
      { name: 'MongoDB', level: 90 },
      { name: 'PostgreSQL', level: 78 },
      { name: 'MySQL', level: 80 },
      { name: 'MS SQL', level: 68 },
    ],
  },
  {
    category: 'System Design',
    icon: '🏗️',
    items: [
      { name: 'Microservices Architecture', level: 82 },
      { name: 'Micro Frontend (Module Federation)', level: 80 },
      { name: 'Serverless Architecture', level: 75 },
      { name: 'Performance Optimization', level: 88 },
    ],
  },
  {
    category: 'Testing',
    icon: '🧪',
    items: [
      { name: 'Jest', level: 85 },
      { name: 'Mocha & Chai', level: 78 },
      { name: 'React Testing Library', level: 82 },
      { name: 'TDD', level: 78 },
      { name: 'WebDriverIO', level: 65 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    tag: 'Case Study 01',
    title: 'Serverless Enterprise Platform',
    subtitle: 'Relevantz · Senior Software Engineer · Aug 2025 – Present',
    problem:
      'Enterprise-grade applications needed scalable, event-driven backend processing without the overhead of managing traditional server infrastructure, while also requiring secure and customizable payment workflows.',
    solution:
      'Built serverless backend solutions using AWS Lambda (Node.js) with Stripe embedded components for payment integration, paired with high-performance React.js frontends — enabling low-latency, scalable enterprise workflows.',
    architecture: [
      'AWS Lambda (Node.js) for serverless, event-driven processing',
      'Stripe embedded components for secure payment workflows',
      'React.js for responsive, high-performance enterprise UIs',
      'Modular, reusable backend services for maintainability',
      'Serverless design patterns for API integrations',
      'Cross-functional collaboration with product, QA, and DevOps',
    ],
    impact: [
      'Serverless architecture eliminated infrastructure management overhead',
      'Low-latency execution improved enterprise application performance',
      'Stripe integration enabled secure, customizable payment solutions',
      'Modular service design accelerated feature delivery cycles',
    ],
    tags: ['AWS Lambda', 'Node.js', 'React.js', 'Stripe', 'Serverless', 'CI/CD'],
    color: 'from-pink-500/20 to-rose-500/10',
    borderColor: 'border-pink-500/30',
  },
  {
    id: 2,
    tag: 'Case Study 02',
    title: 'WebStore & CRM Platform',
    subtitle: 'Bahwan Cybertek · Senior Software Engineer · Team Size: 12',
    problem:
      'A multi-branch retail business needed a unified platform for e-commerce (home delivery + store pickup) and a CRM to automate order processing, customer notifications, and logistics — all fragmented across manual workflows.',
    solution:
      'Led end-to-end development of WebStore (React.js e-commerce frontend) and a custom CRM system with Node.js microservices, multi-payment gateway integration (Razorpay, PayU), and CI/CD via GitHub Actions and Docker.',
    architecture: [
      'React.js SPA with geolocation-based store pickup',
      'Node.js + Express microservices (Orders, CRM, Inventory)',
      'Multi-payment gateway: UPI, credit/debit cards, net banking',
      'MongoDB for flexible product and order schemas',
      'GitHub Actions + Docker with blue-green deployment',
      'CI/CD pipelines for zero-downtime rollouts',
    ],
    impact: [
      'Automated order lifecycle reduced manual effort by 60%',
      'Multi-payment integration increased checkout conversion',
      'Blue-green deployments achieved zero-downtime releases',
      'Modular APIs reused across web, mobile, and CRM clients',
    ],
    tags: ['React.js', 'Node.js', 'MongoDB', 'Razorpay', 'Docker', 'CI/CD', 'Microservices'],
    color: 'from-violet-500/20 to-purple-500/10',
    borderColor: 'border-violet-500/30',
  },
  {
    id: 3,
    tag: 'Case Study 03',
    title: 'Micro Frontend + Microservices Platform',
    subtitle: 'Disprz · Senior Software Engineer · Team Size: 22',
    problem:
      'A 22-engineer team was bottlenecked by a monolithic frontend — every release required full team coordination, causing deployment delays, merge conflicts, and slow feature delivery.',
    solution:
      'Architected a Micro Frontend system using Webpack Module Federation with independent Node.js microservices, enabling each team to develop, test, and deploy their modules autonomously.',
    architecture: [
      'Webpack 5 Module Federation — shell + remote modules',
      'Independent React.js modules per feature domain',
      'Node.js microservices with modular API design',
      'Iframe-based integrations for legacy/third-party systems',
      'Code splitting, lazy loading, and tree shaking',
      'Shared authentication and design system modules',
    ],
    impact: [
      'Independent deployments eliminated cross-team release bottlenecks',
      'Lazy loading significantly improved initial load time',
      'Teams achieved full autonomy over their feature domains',
      'Reduced merge conflicts and improved sprint velocity',
    ],
    tags: ['Module Federation', 'Micro Frontend', 'React.js', 'Node.js', 'Webpack 5', 'React Native'],
    color: 'from-cyan-500/20 to-blue-500/10',
    borderColor: 'border-cyan-500/30',
  },
  {
    id: 4,
    tag: 'Case Study 04',
    title: 'Healthcare Web & Mobile Application',
    subtitle: 'Applaunch.io · MERN Developer → Team Lead · Team Size: 10 (Led 5)',
    problem:
      'A healthcare platform with complex async data flows suffered from frequent UI bugs, poor test coverage, and slow onboarding — making it hard to scale the team or ship features reliably.',
    solution:
      'Promoted to Team Lead, introduced Redux-Saga for async orchestration, enforced TDD with Jest and Mocha, and established component reusability standards — transforming team velocity and code quality.',
    architecture: [
      'React.js with Redux-Saga for async orchestration',
      'Multi-role dashboard (trainers, users, admins)',
      'Jest + Mocha + Chai for TDD across frontend and backend',
      'Node.js REST APIs hosted on AWS EC2 with SSL',
      'CI/CD via GitHub Actions for staging and production',
      'Feature-based folder structure for scalability',
    ],
    impact: [
      'Received client appreciation email for quality and on-time delivery',
      'TDD adoption significantly reduced production bug rate',
      'Onboarding time for new developers cut drastically',
      'Promoted to Team Lead based on performance and ownership',
    ],
    tags: ['React.js', 'Redux-Saga', 'Node.js', 'AWS EC2', 'Jest', 'TDD', 'Team Lead'],
    color: 'from-emerald-500/20 to-teal-500/10',
    borderColor: 'border-emerald-500/30',
  },
  {
    id: 5,
    tag: 'Case Study 05',
    title: 'COVID Certificate PWA',
    subtitle: 'Applaunch.io · MERN Stack Developer · Team Size: 7',
    problem:
      'Users needed reliable access to COVID vaccination certificates even in low-connectivity environments, with real-time push notifications and secure certificate validation.',
    solution:
      'Built a Progressive Web App with Service Workers for offline support, background sync, and push notifications — deployed on AWS EC2 with full CI/CD automation.',
    architecture: [
      'React.js PWA with Service Workers for offline-first experience',
      'Background sync and push notifications without active internet',
      'Node.js REST APIs on AWS EC2 with SSL/TLS',
      'GitHub Actions CI/CD for staging and production',
      'Autoscaling configuration for traffic spikes',
    ],
    impact: [
      'Offline-first experience served users in low-connectivity areas',
      'Push notifications improved user re-engagement',
      'SSL + autoscaling ensured security and high availability',
      'CI/CD pipeline reduced deployment time to minutes',
    ],
    tags: ['PWA', 'Service Workers', 'React.js', 'Node.js', 'AWS EC2', 'GitHub Actions'],
    color: 'from-orange-500/20 to-amber-500/10',
    borderColor: 'border-orange-500/30',
  },
  {
    id: 6,
    tag: 'Case Study 06',
    title: 'Disprz Mobile Application',
    subtitle: 'Disprz · Senior Developer · Team Size: 10',
    problem:
      'A growing learning platform needed a unified mobile experience across Android and iOS with offline capabilities, push notifications, biometric login, and in-app messaging.',
    solution:
      'Designed and implemented multiple modules in the React Native app — using Xcode and Android Studio for native debugging, and coordinating releases with backend and QA teams.',
    architecture: [
      'React Native unified codebase for Android and iOS',
      'Push notifications and offline course progress saving',
      'In-app messaging and biometric login',
      'Xcode and Android Studio for device-level testing',
      'Coordinated mobile releases with backend milestones',
    ],
    impact: [
      'Unified codebase reduced mobile development effort by 40%',
      'Offline support improved usability in low-connectivity regions',
      'Biometric login improved security and user experience',
      'Consistent behavior across devices ensured by QA alignment',
    ],
    tags: ['React Native', 'iOS', 'Android', 'Xcode', 'Push Notifications', 'Offline Support'],
    color: 'from-indigo-500/20 to-blue-500/10',
    borderColor: 'border-indigo-500/30',
  },
];

export const experience = [
  {
    period: 'Aug 2025 – Present',
    role: 'Senior Software Engineer',
    company: 'Relevantz',
    type: 'Full-time',
    highlights: [
      'Developing scalable serverless backend solutions using AWS Lambda (Node.js) for event-driven, enterprise-grade processing',
      'Building high-performance React.js UIs for complex enterprise workflows with seamless user experience',
      'Integrating Stripe embedded components for secure, scalable, and customizable payment solutions',
      'Designing modular, reusable backend services focused on maintainability and low-latency serverless execution',
      'Contributing to architectural decisions around serverless design patterns, API integrations, and payment workflows',
    ],
    tags: ['AWS Lambda', 'Node.js', 'React.js', 'Stripe', 'Serverless'],
  },
  {
    period: 'Oct 2024 – Jul 2025',
    role: 'Senior Software Engineer',
    company: 'Bahwan Cybertek',
    type: 'Full-time',
    highlights: [
      'Spearheaded full development lifecycle of WebStore — a feature-rich e-commerce platform with home delivery and geolocation-based store pickup',
      'Engineered a custom CRM automating order processing, customer notifications, and logistics across multiple retail branches',
      'Integrated multiple payment gateways (Razorpay, PayU) supporting UPI, credit/debit cards, and net banking',
      'Designed modular RESTful APIs with Node.js consumed by both web and mobile clients',
      'Established CI/CD pipelines with GitHub Actions and Docker using blue-green deployments for zero-downtime releases',
    ],
    tags: ['React.js', 'Node.js', 'MongoDB', 'Docker', 'CI/CD', 'Microservices'],
  },
  {
    period: 'Feb 2022 – Oct 2024',
    role: 'Senior Software Engineer',
    company: 'Disprz',
    type: 'Full-time',
    highlights: [
      'Architected microservices-based backend with Node.js enabling scalability and independent service deployments',
      'Implemented micro frontend architecture using React.js and Webpack Module Federation for independent team deployments',
      'Led React Native mobile app development ensuring unified experience across Android and iOS',
      'Applied code splitting, lazy loading, and tree shaking — significantly improving load times and responsiveness',
      'Oversaw release management, coordinating cherry-picking across multiple micro frontends for stable production deployments',
    ],
    tags: ['React.js', 'React Native', 'Node.js', 'Module Federation', 'Microservices', 'Webpack 5'],
  },
  {
    period: 'Feb 2021 – Feb 2022',
    role: 'Full Stack Developer',
    company: 'Applaunch.io',
    type: 'Full-time',
    highlights: [
      'Promoted to Team Lead for Healthcare app — managed 5 engineers, handled PR reviews and component architecture',
      'Introduced Redux-Saga for complex async flows, reducing bugs and improving scalability',
      'Implemented TDD using Jest, Mocha, and Chai across frontend and backend codebases',
      'Managed AWS EC2 deployments with SSL/TLS ensuring high availability for production workloads',
      'Implemented Next.js SSR for content-rich applications, improving SEO and initial load performance',
    ],
    tags: ['React.js', 'Node.js', 'Next.js', 'AWS EC2', 'Jest', 'Redux-Saga', 'Team Lead'],
  },
  {
    period: 'Jan 2020 – Feb 2021',
    role: 'Associate Web Developer',
    company: 'Winze Technologies Pvt. Ltd.',
    type: 'Full-time',
    highlights: [
      'Built a full CRM platform using MERN stack — migrated from PHP/MySQL to React.js + Node.js, improving UX and performance',
      'Developed an Internal Work Progress App with RBAC for Admins and Field Workers with real-time analytics dashboard',
      'Optimized MongoDB schemas with indexing and query tuning, significantly reducing API response times',
      'Collaborated with SEO team to integrate Next.js SSR for better search engine indexing',
    ],
    tags: ['React.js', 'Node.js', 'MongoDB', 'PHP', 'MySQL', 'Next.js'],
  },
];

export const architectureInsights = [
  {
    title: 'Monolith → Microservices',
    icon: '🔀',
    description:
      'Understanding when to break a monolith: service boundaries should align with business domains, not technical layers. Each service owns its data and exposes clean APIs.',
    points: [
      'Domain-Driven Design for service boundaries',
      'Event-driven communication via message queues',
      'Independent deployability per service',
      'Distributed tracing for observability',
    ],
  },
  {
    title: 'Micro Frontend Architecture',
    icon: '🧩',
    description:
      'Scaling frontend teams requires the same thinking as microservices — independent ownership, isolated deployments, and shared contracts via module federation.',
    points: [
      'Webpack 5 Module Federation for runtime integration',
      'Shell app as orchestrator for remote modules',
      'Shared design system as a federated module',
      'Independent CI/CD per frontend domain',
    ],
  },
  {
    title: 'Serverless Design Patterns',
    icon: '⚡',
    description:
      'Serverless shifts focus from infrastructure to business logic. AWS Lambda enables event-driven, auto-scaling backends with pay-per-use cost efficiency.',
    points: [
      'AWS Lambda for event-driven processing',
      'API Gateway as the serverless entry point',
      'Stateless function design for scalability',
      'Cold start optimization strategies',
    ],
  },
  {
    title: 'Performance Optimization',
    icon: '🚀',
    description:
      'Performance is a feature. From bundle splitting to database query optimization, every layer of the stack has opportunities to reduce latency.',
    points: [
      'Code splitting, lazy loading, and tree shaking',
      'CDN for static asset delivery',
      'MongoDB indexing and query optimization',
      'Web Vitals monitoring (LCP, FID, CLS)',
    ],
  },
];

export const achievements = [
  {
    icon: '🏆',
    title: 'Hackathon Winner',
    description:
      'Won the internal Annual Engineering Hackathon at Disprz — awarded a performance voucher for delivering an innovative solution and securing first place.',
  },
  {
    icon: '📧',
    title: 'Client Appreciation',
    description:
      'Received a client appreciation email at Applaunch.io for the successful and timely delivery of a complex Healthcare Web & Mobile Application.',
  },
  {
    icon: '⭐',
    title: 'Code Quality Award',
    description:
      'Honored with the "Code Quality Award" by engineering leadership at Disprz for consistently delivering clean, maintainable, and scalable code.',
  },
  {
    icon: '💻',
    title: 'LeetCode — Top 5000 Global',
    description:
      'Secured a Top 5000 global rank in a LeetCode Weekly Contest, demonstrating strong problem-solving and competitive programming skills.',
  },
  {
    icon: '📜',
    title: 'React.js Certified',
    description:
      'Earned professional certifications in React.js from Udemy and LinkedIn Learning, validating deep expertise in component-driven architecture and hooks.',
  },
  {
    icon: '🌐',
    title: 'Freelance Projects',
    description:
      'Completed multiple freelance web development projects — crafting custom, responsive websites using React.js and Node.js tailored to client needs.',
  },
];

export const currentlyLearning = [
  { topic: 'AWS Solutions Architect', progress: 65, icon: '☁️' },
  { topic: 'Distributed Systems', progress: 50, icon: '🌐' },
  { topic: 'System Design (Advanced)', progress: 72, icon: '🏗️' },
  { topic: 'Kubernetes', progress: 35, icon: '⚙️' },
];
