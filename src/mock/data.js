import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Aniket - My Portfolio', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Aniket',
  subtitle: 'I am a web developer.',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'linked1.jpg',
  paragraphOne:
    "Hi 👋 I'm Aniket Prakash, A Web Developer with an interest in Backend development. I’m currently situated in Odisha, India.",
  paragraphTwo:
    'I love to explore technologies and look forward to opportunities to create meaningful products.',
  paragraphThree: ' ',
  resume: 'https://drive.google.com/file/d/1An0abFabqSJpcNSWsHpk_ocD7cqeTxvJ/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'shopcart.jpg',
    title: 'Shopcart',
    info: 'Shopping cart API made using express.js and sequelize.',
    info2: '',
    url: '',
    repo: 'https://github.com/anik31/shopcart', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'connect.png',
    title: 'Git Connect',
    info:
      'A Github App which will monitor the pull requests of a Github account and make a post to the user’s Linkedin account.',
    info2: '',
    url: 'https://devfolio.co/submissions/git-connect-0061',
    repo: 'https://github.com/Jinlabs/git-connect', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'minder.png',
    title: 'Minder',
    info: 'Minder is an interface for movie cards where a user can Like or dislike a movie.',
    info2: '',
    url: 'http://www.minder.live',
    repo: 'https://github.com/anik31/minder.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'shrinker.png',
    title: 'Shrinker',
    info: 'URL shortener web app made using node.js and mongodb.',
    info2: '',
    url: 'https://shrinker-app.herokuapp.com/',
    repo: 'https://github.com/anik31/shrinker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'keeper.png',
    title: 'Keeper',
    info: 'Notepad app made using ReactJS.',
    info2: '',
    url: 'https://keeper-app-one.vercel.app/',
    repo: 'https://github.com/anik31/keeper-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Screenshot (670).png',
    title: 'Simon Game',
    info: 'Simple game to press the buttons according to the sequence.',
    info2: '',
    url: 'https://anik31.github.io/simon-game/',
    repo: 'https://github.com/anik31/simon-game', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'b218004@iiit-bh.ac.in',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/_anik_31',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/aniket_prakash_31/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/anik31/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/anik31',
    },
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://anik31.medium.com/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
