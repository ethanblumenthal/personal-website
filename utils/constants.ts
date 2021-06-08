import { IProject } from './models';

export const PAGES = [
  { title: 'Home', slug: '/' },
  { title: 'Blog', slug: '/blog' },
  { title: 'About', slug: '/about' },
  { title: 'Projects', slug: '/projects' },
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
    title: `Zeitgeist`,
    description: `Zeitgeist Artist Management was founded in 1999. Our intention is to help artists develop long-term careers in a manner that is consistent with their creative philosophy and vision. Trusted relationships with our clients and business associates, a forward-thinking approach to opportunities presented in the digital space, and a global perspective are valued by the entire team.`,
    link: 'http://zeitgeistmanagement.com/',
  },
];

export const CERTIFICATIONS = [
  {
    title: 'MS, Computer Science',
    description: 'University of Texas',
    link: `https://www.cs.utexas.edu/`,
    icon: 'book',
  },
  {
    title: 'BA, Economics',
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
    title: 'Languages',
    skills: ['Go', 'TypeScript', 'Solidity', 'Rust'],
  },
  {
    title: 'Fullstack',
    skills: ['Node', 'Express', 'GraphQL', 'React'],
  },
  {
    title: 'Blockchain',
    skills: ['Truffle', 'OpenZeppelin', 'Web3', 'Substrate'],
  },
  {
    title: 'DevOps',
    skills: ['Jenkins', 'Docker', 'Kubernetes', 'Terraform'],
  },
];

export const PROJECTS: IProject[] = [
  {
    name: 'GoChain',
    description:
      'A fully decentralized peer-to-peer blockchain written in Go. Secure database using Bitcoin-like proof of work consensus. The database is fully transparent and fair using a sync algorithm. Uses Ethereum’s cryptographic library to implement user authentication and authorization without any centralized database storing all users’ confidential credentials. Ensures an uncheatable tax audit is possible using a secure hashing function to make the database immutable. Leverages a linked list to optimize database performance. Contains two interfaces to control the blockchain nodes - CLI and HTTP.',
    image: '/projects/go.png',
    tags: ['Go', 'Blockchain', 'Crypto'],
    githubURL: 'https://github.com/ethanblumenthal/gochain',
    siteURL: '',
  },
  {
    name: 'Crypto Kitties',
    description:
      'NFT (ERC-721) marketplace based on the popular CryptoKitties app. Collect and breed digital kitties!',
    image: '/projects/crypto-kitties.png',
    tags: ['Solidity', 'ERC-721', 'NFTs'],
    githubURL: 'https://github.com/ethanblumenthal/crypto-kitties',
    siteURL: '',
  },
  {
    name: 'UTXO Ledger',
    description:
      'UTXO ledger model (Bitcoin-like blockchain) built using Rust, WebAssembly, and Substrate.',
    image: '/projects/utxo-ledger.png',
    tags: ['Rust', 'WebAssembly', 'Substrate'],
    githubURL: '',
    siteURL: '',
  },
  {
    name: 'Decentralized Exchange',
    description: '',
    image: '/projects/decentralized-exchange.png',
    tags: ['Solidity', 'OpenZeppelin', 'ERC-20'],
    githubURL: '',
    siteURL: '',
  },
  {
    name: 'Chainlink Lottery',
    description: '',
    image: '/projects/chainlink-lottery.jpg',
    tags: ['Solidity', 'Truffle', 'Chainlink'],
    githubURL: '',
    siteURL: '',
  },
  {
    name: 'Flash Loans',
    description: '',
    image: '/projects/flash-loans.png',
    tags: ['Solidity', 'Aave', 'DeFi'],
    githubURL: '',
    siteURL: '',
  },
  {
    name: 'Trading Bot',
    description: '',
    image: '/projects/go.png',
    tags: ['NodeJS', 'Algorithmic Trading'],
    githubURL: '',
    siteURL: '',
  },
];
