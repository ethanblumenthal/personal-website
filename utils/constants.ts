import { faSchool, faCode } from '@fortawesome/free-solid-svg-icons';
import { faAws, faGoogle } from '@fortawesome/free-brands-svg-icons';

export const PAGES = [
  { title: 'Home', slug: '/' },
  { title: 'Blog', slug: '/blog' },
  { title: 'About', slug: '/about' },
  { title: 'Work', slug: '/work' },
];

export const BIO = {
  title: "Hi, I'm Ethan",
  description:
    'Software engineer with hands-on experience writing clean and maintainable code. Architecting highly available and performant systems at scale. Eager to learn new skills, wear many hats, and collaborate closely with a growing team of people.',
  image: '/ethanblumenthal.jpg',
};

export const LOGO = {
  title: 'Software Engineer',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  image: '/logo.svg',
};

export const EXPERIENCE = [
  {
    title: `Rightpoint`,
    description: `Rightpoint, a Genpact company (NYSE: G) is a global experience leader. Over 700 employees across 12 offices work with clients end-to-end, from defining and enabling vision, to ensuring ongoing market relevance. Our diverse teams lead with empathy, data and creativity—always in service of the experience. From whiteboard to roll-out, we help our clients embed experience across their operations from front to back office to accelerate digital transformation through a human-centric lens.`,
    link: `https://www.rightpoint.com/`,
  },
  {
    title: `Pourcast`,
    description: `Pourcast allows users to manage, track, and enjoy their favorite beverages on tap. The project implements the latest IoT technolgies including Raspberry Pi and Google Cloud Platform as well as slick user interfaces created using React. Additionally, Azure DevOps is used for building and deploying to staging and production environments. Pourcast can be hooked up to any kegerator to give realtime feedback about the state of your tap.`,
    link: '/work/pourcast',
  },
];

export const CERTIFICATIONS = [
  {
    title: 'Software Engineering',
    description: 'Fullstack Academy',
    link: `https://www.fullstackacademy.com/`,
    icon: faCode,
  },
  {
    title: 'Algorithms Specialization',
    description: 'Stanford (Coursera)',
    link: `https://www.coursera.org/specializations/algorithms/`,
    icon: faSchool,
  },
  {
    title: 'Solutions Architect',
    description: 'Amazon Web Services',
    link: `https://aws.amazon.com/certification/certified-solutions-architect-associate/`,
    icon: faAws,
  },
  {
    title: 'Cloud Engineer',
    description: 'Google Cloud Platform',
    link: `https://cloud.google.com/certification/cloud-engineer/`,
    icon: faGoogle,
  },
];

export const SKILLSET = [
  {
    title: 'Frontend',
    skills: ['JavaScript', 'TypeScript', 'React', 'Angular', 'Vue', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    skills: ['Java', 'Python', 'Golang', 'Node', 'Express', 'GraphQL'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
  },
  {
    title: 'DevOps',
    skills: ['Git', 'Linux', 'Jenkins', 'Docker', 'Kubernetes', 'Terraform'],
  },
];
