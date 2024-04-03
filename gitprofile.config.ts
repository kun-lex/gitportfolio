// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'kun-lex', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitportfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Area Guide',
          description:
            'Connecting you to great local and international businesses.',
          imageUrl:
            'https://areaguide-app.vercel.app/assets/bino1-CH5hfks-.png',
          link: 'https://areaguide-app.vercel.app/',
        },
        {
          title: 'The Platform Universal',
          description:
            'Empowering young minds to transform their ideas into tangible solutions that address real-world challenges.',
          imageUrl:
            'https://theplatformuniversal.com/wp-content/uploads/2023/11/PU-Blue-Logo-300x76.png',
          link: 'https://theplatformuniversal.com/',
        },
        {
          title: 'Cryptoverse Legal Consultancy',
          description:
            'Welcome to CRYPTOVERSE Legal, the leading legal advisory firm for Blockchain, Web3, and Crypto start-ups in the UAE (Dubai).',
          imageUrl:
            'https://www.cryptoverselawyers.io/wp-content/uploads/2023/03/Cryptoverse-Logo-White.webp',
          link: 'https://www.cryptoverselawyers.io/',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Ariful Alam',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'David Akinola',
    twitter: 'devdavidak',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'tubosun_david',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'dev.david',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'dev.akinoladavid@yahoo.com',
  },
  resume: {
    fileUrl:
      'https://firebasestorage.googleapis.com/v0/b/elp-app-f1caa.appspot.com/o/OLATUNBOSUN%20DAVID%20AKINOLA%20CV.docx%20(1).pdf?alt=media&token=123dc716-dd7b-4b8f-9182-ecb434f60185', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'TypeScript',
    'React.js',
    'Node.js',
    'Next.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Python',
    'Django',
    'Tailwind',
    'UI/UX',
    'Prisma'
  ],
  experiences: [
    {
      company: 'Z-index Technologies',
      position: 'FullStack Engineer ',
      from: 'January 2024',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'Zorft Technologies',
      position: 'intern',
      from: 'july 2023',
      to: 'December 2023',
      companyLink: 'https://zorftstech.com',
    },
  ],
  certifications: [
    {
      name: 'Free code camp',
      body: 'Scientific Computing with Python',
      year: 'April 2023',
      link: 'https://freecodecamp.org/certification/Devdavidakinola/scientific-computing-with-python-v7',
    },
  ],
  educations: [
    {
      institution: 'Lagos State University',
      degree: 'Degree',
      from: '2016',
      to: '2010',
    },
    {
      institution: 'Altschool Africa',
      degree: 'Diploma',
      from: '2023',
      to: '2024',
    },
  ],
  publications: [
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'Dev.David', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
