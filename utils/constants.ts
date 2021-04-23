export const PAGES = [
  { title: 'Home', slug: '/' },
  { title: 'Blog', slug: '/blog' },
  { title: 'About', slug: '/about' },
  { title: 'Work', slug: '/work' },
];

export const BIO = {
  title: 'About Ethan',
  description:
    'Software engineer with hands-on experience writing clean and maintainable code. Architecting highly available and performant systems at scale. Eager to learn new skills, wear many hats, and collaborate closely with a growing team of people.',
  image: '/ethanblumenthal.jpg',
};

export const LOGO = {
  title: `Hi, I'm Ethan!`,
  description:
    'A problem solver, interested in building products that help others achieve their goals. I currently work as a software developer for Rightpoint, a global customer experience consultancy. Check out my blog where I discuss technology and its larger impact on society. Some fun facts about me: I collect vinyl records, I love sushi, and enjoy exploring national parks. Feel free to reach out if you want to connect!',
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
    title: 'Masters, Computer Science',
    description: 'University of Texas',
    link: `https://www.cs.utexas.edu/`,
    icon: 'book',
  },
  {
    title: 'Bachelors, Economics',
    description: 'University of Illinois',
    link: `https://economics.illinois.edu/`,
    icon: 'book',
  },
  {
    title: 'Solutions Architect',
    description: 'Amazon Web Services',
    link: `https://www.youracclaim.com/badges/8a0ce950-5147-4836-b4ea-094199021f76`,
    icon: 'code',
  },
  {
    title: 'Cloud Engineer',
    description: 'Google Cloud Platform',
    link: `https://www.credential.net/7ddf36bf-5464-4a7b-b4e1-c8a03f2cb105?key=f97cb02161d2387c668949d990c541bb9a2f39430c128c10c81b835718b9864d&_ga=2.143835574.26271270.1610596323-764528462.1610596323`,
    icon: 'code',
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
