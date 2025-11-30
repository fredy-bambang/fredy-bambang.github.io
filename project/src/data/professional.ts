export interface Experience {
  id: number
  company: string
  position: string
  type: string
  duration: string
  period: string
  location: string
  description: string[]
  skills: string[]
  logo?: string
}

export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  link?: string
  github?: string
  image?: string
  featured: boolean
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'PT Clarus Innovace Technology',
    position: 'Full Stack Engineer',
    type: 'Contract',
    duration: '1 yr 5 mos',
    period: 'Jul 2024 - Present',
    location: 'Jakarta, Indonesia · Hybrid',
    description: [
      'Full-stack feature development for an insurance brokerage system using Symfony, from backend APIs to frontend dashboards and admin tools',
      'Specialized in host-to-host API integrations between lenders (PNM) and multiple insurance providers, ensuring seamless data exchange',
      'Built comprehensive admin interfaces for policy management, claims processing, and client onboarding',
      'Served as primary technical contact for clients, conducting requirements analysis, solution design, and UAT sessions',
      'Architected end-to-end claims management workflow from data validation to document handling and approval processes'
    ],
    skills: ['Symfony', 'PHP', 'API Integration', 'Full Stack Development']
  },
  {
    id: 2,
    company: 'Personal Development',
    position: 'Career Break - Tech Entrepreneurship',
    type: 'Self-employed',
    duration: '6 mos',
    period: 'Jan 2024 - Jun 2024',
    location: 'Tangerang, Banten, Indonesia',
    description: [
      'Tech Entrepreneurship: Developed freelance projects and assisted friends in building their companies through technical setup and infrastructure',
      'Business Education: Engaged with business communities to learn about product validation, business models, and go-to-market strategies',
      'Professional Networking: Participated in client presentations and industry events to expand perspectives',
      'Technical Practice: Continued hands-on development with Go and Laravel, refining approaches that balance speed and maintainability'
    ],
    skills: ['Go', 'Laravel', 'Business Development', 'Product Management']
  },
  {
    id: 3,
    company: 'FinAccel',
    position: 'Backend Developer',
    type: 'Full-time',
    duration: '1 yr 3 mos',
    period: 'Oct 2022 - Dec 2023',
    location: 'South Jakarta, Jakarta, Indonesia · Hybrid',
    description: [
      'Engineered critical backend services for the Lender Project using Go, developing and maintaining mission-critical API endpoints, Kafka consumers, and scheduled jobs',
      'Architected and executed a near-zero-downtime MySQL migration from v5.7 to 8, coordinating across Infra, DBA, and Security teams to ensure uninterrupted banking operations',
      'Led the database cloning strategy from Kredivo to Kredifazz Lender Database, ensuring full compliance with OJK financial regulations',
      'Designed a real-time audit trail system by consuming Kafka streams, enabling complete traceability of configuration changes',
      'Pioneered event-driven insurance flows using Kafka, transforming creation, deactivation, and cancellation processes into asynchronous, state-based systems',
      'Acted as technical bridge between product and cross-functional teams to resolve issues and align technical implementation with business requirements'
    ],
    skills: ['Go', 'MySQL', 'Kafka', 'Microservices', 'Event-Driven Architecture']
  },
  {
    id: 4,
    company: 'PT Payfazz Teknologi Nusantara',
    position: 'Backend Developer',
    type: 'Full-time',
    duration: '4 yrs 8 mos',
    period: 'Feb 2018 - Sep 2022',
    location: 'Jakarta, Jakarta, Indonesia',
    description: [
      'Spearheaded end-to-end development of multiple MVP products from concept to production, demonstrating adaptability across diverse tech stacks (Express.js, AdonisJS, Go) and business domains',
      'Engineered a secured loan application system with Express.js backend and Vue.js frontend, facilitating seamless integration with confidential third-party finance companies for loan underwriting and review',
      'Architected and built two versions of an Internal Asset Management System, first with AdonisJS and later refactoring to Go for improved performance',
      'Developed core features for a dual-balance lending product using AdonisJS, enabling users to access credit within the Payfazz ecosystem through integration with P2P lending partners',
      'Contributed to Site Reliability Engineering (SRE), supporting daily infrastructure operations on AWS, managing deployments, and configuring Nginx routing',
      'Mentored and collaborated with junior developers across different project teams, promoting code quality and knowledge sharing'
    ],
    skills: ['AdonisJS', 'Go', 'Express.js', 'Vue.js', 'AWS', 'SRE', 'MySQL', 'MongoDB', 'Redis']
  },
  {
    id: 5,
    company: 'Etobee Indonesia',
    position: 'Backend Developer',
    type: 'Full-time',
    duration: '1 yr 4 mos',
    period: 'Nov 2016 - Feb 2018',
    location: 'Jakarta, Jakarta, Indonesia · On-site',
    description: [
      'Maintained and enhanced backend services for the core internal admin system of a logistics platform, part of the Admin Squad responsible for critical operational features',
      'Developed new functionalities using Express.js and SQL Server to support evolving warehouse and logistics workflows',
      'Gained hands-on experience with a monolithic codebase, navigating challenges such as database deadlocks and performance issues',
      'Collaborated in a multi-squad environment (Admin, Mobile, Kurir), contributing to the broader product ecosystem'
    ],
    skills: ['Software Development', 'Linux', 'Express.js']
  },
  {
    id: 6,
    company: 'Freelance Web Development',
    position: 'Web Programmer',
    type: 'Freelance',
    duration: '1 yr 2 mos',
    period: 'Sep 2015 - Oct 2016',
    location: 'Jakarta, Jakarta, Indonesia',
    description: [
      'Developed a custom B2B Travel Application prototype using Laravel, delivering end-to-end solution from requirement analysis to deployment',
      'Collaborated directly with client to translate business needs into technical specifications and functional features',
      'Managed full project lifecycle including design, development, testing, and client feedback iterations'
    ],
    skills: ['Software Development', 'Laravel']
  },
  {
    id: 7,
    company: 'PT Sofco Graha',
    position: 'Software Engineer',
    type: 'Full-time',
    duration: '3 yrs',
    period: 'Oct 2012 - Sep 2015',
    location: 'Jakarta, Jakarta, Indonesia · On-site',
    description: [
      'Developed and maintained multiple modules for a large-scale ERP system serving manufacturing clients, utilizing Java and Oracle database',
      'Gained foundational experience in enterprise software development, participating in full project lifecycle from implementation to bug resolution during on-site client deployments',
      'Collaborated with senior engineers and leads to troubleshoot complex issues and ensure system stability in production environments',
      'Built expertise in complex business process mapping and translating manufacturing operational requirements into technical solutions'
    ],
    skills: ['Software Development', 'Linux', 'Java', 'Oracle']
  }
]

export const projects: Project[] = [
  {
    id: 1,
    title: 'Insurance B2B API Platform',
    description: 'Built scalable REST APIs for insurance brokers to track transactions across clients, brokers, and companies. Solved unique identifier conflicts, improved data tracking, and ensured high reliability.',
    technologies: ['Symfony', 'PHP', 'MySQL', 'API Integration'],
    featured: true
  },
  {
    id: 2,
    title: 'Data Migration & Cleansing',
    description: 'Architected and executed near-zero-downtime MySQL migration from v5.7 to 8 for banking operations. Led database cloning strategy ensuring OJK compliance.',
    technologies: ['MySQL', 'Go', 'Database Migration', 'DevOps'],
    featured: true
  },
  {
    id: 3,
    title: 'Real-time Audit Trail System',
    description: 'Designed event-driven audit system consuming Kafka streams for complete configuration change traceability.',
    technologies: ['Go', 'Kafka', 'Event-Driven Architecture', 'Microservices'],
    featured: true
  },
  {
    id: 4,
    title: 'Secured Loan Application System',
    description: 'Full-stack loan application with Express.js backend and Vue.js frontend, integrated with third-party finance companies.',
    technologies: ['Express.js', 'Vue.js', 'Node.js', 'MySQL'],
    featured: true
  },
  {
    id: 5,
    title: 'Internal Asset Management System',
    description: 'Built company-wide asset tracking system, initially with AdonisJS, then refactored to Go for improved performance.',
    technologies: ['Go', 'AdonisJS', 'PostgreSQL', 'REST API'],
    featured: false
  },
  {
    id: 6,
    title: 'B2B Travel Application',
    description: 'Custom Laravel-based B2B travel booking platform from requirement analysis to deployment.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    featured: false
  }
]

export const skills = {
  languages: ['Go', 'PHP', 'TypeScript', 'JavaScript', 'Java'],
  frameworks: ['Symfony', 'Laravel', 'AdonisJS', 'Express.js', 'Vue.js'],
  databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Oracle'],
  tools: ['Kafka', 'Docker', 'Git', 'AWS', 'Nginx', 'Linux']
}
