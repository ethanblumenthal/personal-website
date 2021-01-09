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
    'Software engineer with hands-on experience writing clean and maintainable code. Eager to learn new skills, wear many hats, and collaborate closely with a growing team of people. Currently learning to play the guitar and speak Spanish.',
  image: '/ethanblumenthal.jpg',
};

export const INVOLVEMENT = [
  {
    title: `Rightpoint`,
    description: `Rightpoint, a Genpact company (NYSE: G) is a global experience leader. Over 700 employees across 12 offices work with clients end-to-end, from defining and enabling vision, to ensuring ongoing market relevance.`,
    link: `https://www.rightpoint.com/`,
  },
  {
    title: `Slingshot Studios`,
    description: `Slingshot Studios is a product design and development consultancy that specializes in creating fast and secure applications with modern JAMstack technologies.`,
    link: 'http://www.slingshotstudios.io/',
  },
  {
    title: `Savvy`,
    description: `Savvy is an browser extension that allows helps users to maximize their credit card rewards.`,
    link: `https://www.getsavvy.io/`,
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
    title: 'Data Science',
    description: 'Dataquest',
    link: `https://www.dataquest.io/`,
    icon: faSchool,
  },
  {
    title: 'Solutions Architect',
    description: 'Amazon Web Services',
    link: `https://www.dataquest.io/`,
    icon: faAws,
  },
  {
    title: 'Cloud Engineer',
    description: 'Google Cloud Platform',
    link: `https://www.dataquest.io/`,
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
