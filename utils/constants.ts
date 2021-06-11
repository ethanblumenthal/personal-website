import { IProject, IService } from './models';

export const PAGES = [
  { title: 'Home', slug: '/' },
  { title: 'Blog', slug: '/blog' },
  { title: 'About', slug: '/about' },
  { title: 'Projects', slug: '/projects' },
];

export const BIO = {
  title: 'About Ethan',
  description:
    'I am a software engineer specializing in smart contract development and blockchain architecture. I have extensive experience working with peer-to-peer networking, cryptography, and game theory. My mission is to contribute to the development of a more decentralized, transparent, and secure Internet. Together, we can create a more equitable future where everyone can participate in the new global token economy enabled by Web3.',
  image: '/ethanblumenthal.jpg',
};

export const LOGO = {
  title: `Welcome crypto explorer!`,
  description:
    'The Internet was originally designed to be the ultimate economic leveler as everyone had an equal opportunity to access the world of digital information and commerce through their devices. However, this utopian vision was quickly corrupted when big technology companies realized that they could monopolize the most important resource of the internet age, data, and sell it to the highest bidder. The crypto revolution promises to return the Internet to its original roots by reimagining how humans interact with each other in a trustless environment enabled by blockchain technology. Crypto will be the largest disrupter of this decade, redistributing the concentration of wealth and power to the masses. Come join me in exploring and building the infinite frontier!',
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
    skills: ['TypeScript', 'Go', 'Rust', 'Solidity'],
  },
  {
    title: 'Fullstack',
    skills: ['Node', 'Express', 'GraphQL', 'React'],
  },
  {
    title: 'Blockchain',
    skills: ['Truffle', 'OpenZeppelin', 'web3.js', 'Substrate'],
  },
  {
    title: 'DevOps',
    skills: ['Jenkins', 'Docker', 'Kubernetes', 'Terraform'],
  },
];

export const PROJECTS: IProject[] = [
  {
    name: 'NFT Marketplace',
    description:
      'A decentralized application (dApp) based on the popular CryptoKitties app. Users can breed kittens as well as sell them to others on the open market. Each kitten is designed according to its verifiably unique encoded DNA string with earlier generation kittens being more valuable. The smart contract implements the ERC-721 token standard for NFTs as well as ERC-165 for interfacing with other contracts. Web3.js is used to communicate between the client and the blockchain. The project was developed locally using Ganache and tested on the Kovan test network.',
    image: '/projects/nft-marketplace.png',
    tags: ['Solidity', 'Ethereum', 'ERC-721'],
    githubURL: 'https://github.com/ethanblumenthal/nft-marketplace',
    appURL: 'https://github.com/ethanblumenthal/nft-marketplace',
  },
  {
    name: 'Go Blockchain',
    description:
      'A fully decentralized peer-to-peer blockchain written in Go from scratch. The ledger is secured using a proof-of-work consensus mechanism while being fully transparent using a sync algorithm. The blockchain uses Ethereum’s cryptographic library to create pseudo-anonymous wallets allowing users to securely sign transactions. The implementation ensures an uncheatable audit is possible using a secure hashing function to make the database immutable. It also leverages a linked list to optimize database performance. The project contains two interfaces to interact with the blockchain nodes - a CLI and HTTP.',
    image: '/projects/go-blockchain.png',
    tags: ['Go', 'Blockchain', 'Cryptography'],
    githubURL: 'https://github.com/ethanblumenthal/go-blockchain',
    appURL: 'https://github.com/ethanblumenthal/go-blockchain',
  },
  {
    name: 'Rust Blockchain',
    description:
      'An unspent transaction output (UTXO) ledger model that enables a Bitcoin-like blockchain. The project uses the Substrate framework which is written in Rust and compiled to WebAssembly. Substrate was created by Parity Technologies, the creators of Polkadot. The chain is cryptographically secured against replay attacks using the FRAME pallet composed of blockchain primitives. I also updated the network transaction pool logic to avoid race conditions and configured the genesis block.',
    image: '/projects/rust-blockchain.png',
    tags: ['Rust', 'WebAssembly', 'Substrate'],
    githubURL: 'https://github.com/ethanblumenthal/rust-blockchain',
  },
  {
    name: 'Decentralized Exchange',
    description:
      'A simple decentralized exchange (DEX) implementation that enables trading of Ether (ETH) for ERC-20 tokens and vice versa. The DEX is based on the order book model and supports both market and limit orders. Bubble sort is used when creating a limit order to ensure proper matching based on price between buyers and sellers. The project uses the Truffle framework and OpenZeppelin library for building smart contracts.',
    image: '/projects/decentralized-exchange.png',
    tags: ['Solidity', 'Ethereum', 'ERC-20'],
    githubURL: 'https://github.com/ethanblumenthal/decentralized-exchange',
  },
  {
    name: 'Decentralized Lottery',
    description:
      'A decentralized lottery that allows users to pool together ETH and randomly selects a winner. Chainlink’s oracle service is used to bring information from the real world on-chain. The lottery consumes a Chainlink price feed to determine the price of ETH when entering the contest as the entry fee is fixed in USD. It also uses Chainlink’s verifiable random function (VRF) to ensure randomness on-chain in a deterministic setting.',
    image: '/projects/decentralized-lottery.png',
    tags: ['Solidity', 'Ethereum', 'Chainlink'],
    githubURL: 'https://github.com/ethanblumenthal/decentralized-lottery',
  },
];

export const SERVICES: IService[] = [
  // {
  //   cta: 'Subscribe to Tokenomics',
  //   subtext: 'Substack Newsletter and Discord Community',
  //   summary:
  //     "There are over 5000 tokens listed on CoinMarketCap already. With more being created everyday, finding the right long-term investments in this new economy can be overwhelming. Every week I send out an email newsletter called Tokenomics via Substack where I dive deep into a token that I believe has tremendous potential. I provide you with in-depth research and analysis about the project's mission, team, technology, and outlook so that you fully understand the opportunity. The subscription also includes access to all previous reports as well as my Discord community where we share ideas and discuss interesting projects.",
  //   link: 'https://substack.com/',
  // },
  {
    cta: 'Invest in Small Cap Gems',
    subtext: 'TokenSet Investment Fund',
    summary:
      'Small cap gems are newer projects with a relatively small market cap. These tokens can have massive financial upside if you catch them before they take off. A TokenSet is a portfolio of cryptocurrencies that is represented by a single token which is tradeable on exchanges. It is similar to an index fund in traditional finance as you can invest in multiple stocks within a single asset. I actively manage the TokenSet and reinvest profits into other opportunities. By purchasing my TokenSet, you will gain exposure to the best up and coming projects in the industry while maintaining full transparency over your investment.',
    link: 'https://www.tokensets.com/',
  },
  {
    cta: 'Book a Crypto Consultation',
    subtext: 'OpenLaw Personal Token',
    summary:
      'I offer consulting services focused on blockchain technology, decentralized finance, and derivative trading strategies. I can walk you through the core concepts and protocols of how crypto will affect you personally as well as your business. I created a personal token via OpenLaw which you can purchase on exchanges and redeem for my time. This allows for my consultations to be priced according to the market demand for my services. OpenLaw allows you to create real world legal agreements on Ethereum. Please reach out if you would like to discuss how I can help but please note that I cannot offer any financial advice.',
    link: 'https://www.openlaw.io/',
  },
];
