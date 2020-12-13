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
    'Im a software engineer committed to building products that empower users in their daily lives. I share my thoughts on technology and humanism on my blog',
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

export const EDUCATION = [
  { title: 'BA Economics', description: 'University of Illinois', date: 'August 2011 - May 2015' },
  {
    title: 'Software Engineering',
    description: 'Fullstack Academy',
    date: 'Jan 2019 - April 2019',
  },
];

export const CERTIFICATIONS = [
  { title: 'BA Economics', description: 'University of Illinois', icon: faSchool },
  { title: 'Software Engineering', description: 'Fullstack Academy', icon: faCode },
  { title: 'Solutions Architect', description: 'Amazon Web Services', icon: faAws },
  { title: 'Cloud Engineer', description: 'Google Cloud Platform', icon: faGoogle },
];

export const SKILLSET = [
  'HTML',
  'CSS',
  'React',
  'Vue',
  'TypeScript',
  'Node',
  'Express',
  'GraphQL',
  'Java',
  'Spring',
  'Python',
  'Go',
  'SQL',
  'Jenkins',
  'Docker',
  'Kubernetes',
];

export const EXPERIENCE = [
  {
    company: 'Rightpoint',
    position: 'Software Developer',
    dates: 'July 2019 - Present',
    accomplishments: [
      'Launched publicity and marketing campaigns earning 10M+ impressions',
      'Created content strategy for social media, advertising, and newsletters',
      'Oversaw the design and development of artist websites and stores',
    ],
  },
  {
    company: 'Zeitgeist Artist Management',
    position: 'Marketing Coordinator',
    dates: 'July 2015 - Dec 2018',
    accomplishments: [
      'Launched publicity and marketing campaigns earning 10M+ impressions',
      'Created content strategy for social media, advertising, and newsletters',
      'Oversaw the design and development of artist websites and stores',
    ],
  },
];
