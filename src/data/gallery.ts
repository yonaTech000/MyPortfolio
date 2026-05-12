// src/data/gallery.ts
// Image metadata for the Gallery/Portfolio section

export interface GalleryImage {
  src: string;
  title: string;
  alt: string;
  description: string;
  tags: string[];
  highlightIcons?: string[];
  width?: number;
  height?: number;
}

export const galleryImages: GalleryImage[] = [
  {
    src: '/img/safcom.png',
    title: 'SAFCOM Secure Portal',
    alt: 'SAFCOM telecom security dashboard',
    description:
      'A polished telecom operations portal demonstrating enterprise cybersecurity, backend orchestration, and mobile-ready system flows. Built for secure communication, real-time monitoring, and cross-platform delivery.',
    tags: ['Cybersecurity', 'Python', 'Java', 'C#', 'Mobile App', 'Security'],
    highlightIcons: ['Python', 'Flutter', 'Cybersecurity'],
  },
  {
    src: '/img/space.png',
    title: 'SPACE Operations View',
    alt: 'SPACE mission operations dashboard',
    description:
      'A systems-oriented operations dashboard designed to visualize mission-critical telemetry and streamline decision workflows. Focused on reliability, clarity, and secure data presentation.',
    tags: ['Operations', 'Telemetry', 'Dashboards', 'Security'],
    highlightIcons: ['Cybersecurity'],
  },
  {
    src: '/img/cybersecure.png',
    title: 'CyberSecure Monitoring',
    alt: 'CyberSecure threat monitoring interface',
    description:
      'A security-first monitoring concept for detecting and responding to threats. Includes alerting patterns, incident context, and actionable insights to support fast triage.',
    tags: ['Cybersecurity', 'Threat Detection', 'SIEM', 'Incident Response'],
    highlightIcons: ['Cybersecurity'],
  },
  {
    src: '/img/full.png',
    title: 'Full-Stack Secure Platform',
    alt: 'Full platform overview with secure workflow components',
    description:
      'An end-to-end secure platform architecture showcasing connected components across front-end UX, backend orchestration, and data protection. Built for performance, resilience, and maintainability.',
    tags: ['Full Stack', 'Security', 'API', 'Architecture'],
    highlightIcons: ['Python', 'Flutter', 'Cybersecurity'],
  },
  {
    src: '/img/me.png',
    title: 'Deployment',
    alt: 'Deployment workflow and release automation',
    description:
      'Release and deployment workflow focused on reliability—automated builds, environment-safe rollouts, and predictable delivery. Designed to support secure updates and smooth versioning.',
    tags: ['Deployment', 'CI/CD', 'Release', 'Automation', 'Security'],
    highlightIcons: ['Python', 'Cybersecurity'],
  },
  {
    src: '/img/u.png',
    title: 'Maintenance',
    alt: 'Maintenance and ongoing operations',
    description:
      'Ongoing maintenance for stability and performance—monitoring, incident response readiness, routine updates, and continuous improvements to keep systems secure and dependable over time.',
    tags: ['Maintenance', 'Monitoring', 'Ops', 'Stability', 'Security'],
    highlightIcons: ['Cybersecurity'],
  },
];


