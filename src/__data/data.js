// The document contains data used to populate fields throughout the site.
// Google News API key: 670f9cd6f82643a99331cc217f30f479
export const JS_DATA = [
  'FrontEnd Tools',
  'JavaScript',
  'ES6+',
  'React',
  'React Native',
  'P5.js',
  'Node.js',
  'D3.js',
  'Apollo-Client'
];

export const SKILLSET_OVERVIEW = [
  'JavaScript ES6/7',
  'React-Native / ReactJS',
  'Unity3D / C#',
  'Blender',
  'CSS3 / SASS / Less / Styled-Components',
  'HTML5 / Canvas',
  'NodeJS / Express',
  'Python',
  'Propellerhead Reason (DAW)',
  'Ableton Live (DAW)'
];

export const STYLE_DATA = [ 'Styling Tools', 'CSS3', 'SASS', 'Less', 'Styled-Components', 'GreenSock' ];

export const HTML_DATA = [ 'HTML 5', 'Canvas' ];

export const BACKEND_DATA = [ 'BackEnd Tools', 'SQL', 'SQLite', 'Node.js', 'Knex.js', 'Django', 'GraphQL', 'Redis' ];

export const WEB_API_DATA = [
  'Favorite W3C APIs',
  'Web Audio API',
  'Accelerometer',
  'Gryoscope',
  'Orientation Sensor',
  'Mic/Camera',
  'Drag and Drop',
  'Vibration API'
];

export const LANGUAGE_DATA = [ 'MultiLingual', 'Python', 'C', 'Processing', 'Java (Android)', 'C++' ];

export const TECH_LIST = [
  'JavaScript',
  'Styling',
  'HTML5',
  'FullStack',
  'Cool Web-Tech',
  'Other Languages',
  'Design Experience',
  'Favorite Tech-Stacks'
];

export const DESIGN_DATA = [
  'Graphic Design Tools',
  'Adobe Illustrator',
  'Adobe Photoshop',
  'Adobe InDesign',
  'Adobe XD',
  'InkScape'
];

export const AUDIO_SKILLS_DATA = [
  'Music Creation / Audio Editing',
  'PropellerHeads Reason',
  'Ableton LIVE',
  'Audacity'
];

export const VIDEO_EDITING_SKILLS = [ 'Video Creation / Editing', 'Adobe Premiere', 'After Effects' ];

export const FAV_COMBOS_DATA = [
  'Favorite Tech Stacks',
  'JS + Sass,\n and GreenSock',
  'React, Express,\n Apollo, GraphQL',
  'ReactStrap, Illustrator\n FontAwesome',
  'mobile-device sensors\n art & sound',
  'D3.js and Angular',
  'Processing, Arduino,\n freetime, and IC'
];

/**
 * Education Data
 */
export const EDUCATION = [
  {
    name: 'Lambda School - 2018-2019',
    major: 'Computer Science',
    focus: 'Software Engineering',
    extraCurricular: [],
    curriculum: [
      'Full-Stack Web Development',
      'Database and RESTful API Design',
      'Programming paradigms (Declarative, Imperative, and Procedural)',
      'Single-Page Application Development',
      'Algorithm Analysis',
      'Data Structures',
      'Theory of Computation',
      'Computer Architecture',
      'Cellular Automata',
      'Version Control',
      'Agile (Scrum and Kanban) and Waterfall techniques'
    ],
    tech: [
      'JavaScript ES6/ES7',
      'ReactJS/Redux',
      'CSS3 / LESS / SASS',
      'Python',
      'Django',
      'Pip',
      'Bokeh',
      'C Language',
      'NodeJS',
      'SQL/SQLite',
      'Test-Driven Development',
      'Git/Github',
      'Webpack',
      'VSCode',
      'CLion',
      'Bash Scripting',
      'Continuous Integration / Continuous Deployment',
      'DevTools',
      'Debugging practices'
    ],
    // https://github.com/Lambda-School-Labs/labs-team-home
    projects: [
      'Sveza team-collaboration tool \n (React, \n Styled-Components, \nApollo-Client, \n GraphQL, \n Apollo-Server, \n ExpressJS, \n MongoDB/Mongoose, \n 0Auth, \n Material-UI, \n Stripe, \n Postman, \n Twilio, \n and more',
      'Conways Game of Life (JavaScript, P5js, Canvas, React)',
      'Web Server (C Language)',
      'CPU Emulator (C Language)',
      'Command-line Multi-User Game (Python)',
      'Django Rest API (Python, JavaScript)'
    ]
  },
  {
    name: 'James Madison University - 2004-2009',
    major: "Bachelor's Degree in Philosophy",
    minor: 'Writing (Creative / Technical) and Fine-Art/Graphic Design',
    focus: 'Nietzsche and 20th Century European Philosophy',
    curriculum: [
      'Post-Structuralism',
      'Social Theory',
      'History of Western Philosophy',
      '2D Design',
      'Art Theory',
      'Drawing and Dry Media',
      'Painting',
      'Technical Writing',
      'Writing Fiction',
      'Creative Non-fiction',
      'Poetry'
    ],
    extraCurricular: [ 'Phi Sigma Tau Philosophy Honors Society, ', 'Director of the Club of Creative Writing' ],
    tech: [ 'Microsoft Office', 'Propellerheads Reason' ],
    projects: [ "Gille Deleuze's Concept of Becoming", 'The Nature of Nietzsches Perspectivism' ]
  },
  {
    name: 'Oregon State University - 2017',
    major: 'Computer Science 2nd Degree (incomplete)',
    minor: '',
    focus: 'Software Engineering',
    curriculum: [ 'Accelerated Object-Oriented Programming in C++', 'Discrete Mathematics' ],
    extraCurricular: [ '' ],
    tech: [ 'C/C++', 'Vim', 'CLion', 'Git', 'BASH' ],
    projects: [ 'Various small exercises within object-oriented programming curriculum and math.' ]
  },
  {
    name: 'Blue Ridge Community College - 2012',
    major: 'Web Design and Development Certificate',
    minor: '',
    focus: 'Graphic Design and Full-Stack Web Development',
    curriculum: [
      'Digital Graphic Design for Web',
      'Object-Oriented Programming in Java',
      'Front-End Web Development',
      'Full-Stack Development'
    ],
    extraCurricular: [ '' ],
    tech: [ 'XHTML', 'CSS', 'Javascript (ES5)', 'Java', 'Eclipse', 'Notepad++', 'PHP' ],
    projects: [
      'Various websites utilizing web development fundamentals',
      'Various business-card, business logo, and poster designs',
      'Various simple, small projects demonstrating rudimentary programming exercises'
    ]
  }
  // {
  // 	name: '',
  // 	major: '',
  // 	minor: '',
  // 	focus: '',
  // 	curriculum: [],
  // 	extraCurricular: [],
  // 	tech: [],
  // 	projects: []
  // }
];

/**
 * Professional Data
 */
export const PROFESSIONAL_DATA = [
  {
    employer: 'Sartography / UVA',
    role: 'React-Native/UI Engineer',
    duration: '2020 - 2021',
    description: 'Contract',
    projects: [
      'Primary developer on SkillSTAR mobile app, using React Native.  Designed, architected, and developed a mobile app for teaching Autistic children essential skills.'
    ],
    tech: ['React Native', 'JavaScript / ES6+', 'TypeScript', 'Adobe Illustrator', 'Jest']
  },
  {
    employer: 'Chatwise (chatbot)',
    role: 'Full-Stack Engineer',
    duration: '2019',
    description: 'Contract',
    projects: [
      'Using the Facebook Messenger API, Postgres, and React, I contributed to the development of a dynamic chatbot that provides a Blinkist-type product within Facebook Messenger.'
    ],
    tech: [ 'PostGres', 'Express / NodeJS', 'React', 'Sass', 'JavaScript / ES6', 'Messenger API' ]
  },
  {
    employer: 'Realm',
    role: 'React-Native Engineer',
    duration: '2019',
    description: 'Contract',
    projects: [
      'Within React-Native, I contributed to architecting and developing the Realm gamer-focused social-media app.'
    ],
    tech: [ 'React-Native', 'Redux', 'Styled-Components', 'JavaScript / ES6', 'Expo', 'Figma' ]
  },
  {
    employer: 'Connect Our Kids',
    role: 'React-Native Engineer',
    duration: '2019',
    description: 'Contract',
    projects: [ 'Architecting and developing Connect Our Kids first mobile app, using React-Native.' ],
    tech: [ 'React-Native', 'Redux', 'Sass', 'JavaScript / ES6', 'Expo' ]
  },
  {
    employer: 'NextLevel / B612 Design (Stuttgart)',
    role: 'JavaScript Engineer',
    duration: '2018',
    description: 'Contract',
    projects: [ 'Contributed to building an interactive guilloche using Angular 4 and D3.js.' ],
    tech: [ 'TypeScript', 'D3.js', 'Angular 4', 'NodeJS' ]
  },
  {
    employer: 'NextLevel / Kardion (Stuttgart)',
    role: 'Front-End Engineer',
    duration: '2018',
    description: 'Contract',
    projects: [ 'Per design specifications, helped build responsive website for Kardion GmbH' ],
    tech: [ 'Bootstrap 4', 'CSS3', 'HTML5', 'Canvas API' ]
  },
  {
    employer: 'Raincrow Studios',
    role: 'NodeJS Engineer',
    duration: '2018',
    description: 'Contract',
    projects: [
      'Contributed to the architecture and initial engineering stages of a server / RESTful API and in-memory database for an international MMORPG, Covens '
    ],
    tech: [ 'NodeJS', 'Javascript ES6', 'Redis', 'Postman' ]
  },
  {
    employer: 'ChartIQ',
    role: 'Javascript Engineer',
    duration: '2016 - 2017',
    description: 'In-house Javascript and Front-End / AngularJS Engineer',
    projects: [
      'Integration of ChartIQ ProCharts into eToro AngularJS application.',
      'Contributed to debugging, building and performance enhancement of ChartIQ flagship charting product.',
      'Contributed to ChartIQ public-facing developer documentation.'
    ],
    tech: [
      'JavaScript',
      'HTML5 Canvas',
      'CSS3',
      'WebPack',
      'NodeJS',
      'AngularJS',
      'Jira',
      'Trello',
      'JSLint',
      'Testing with: Chai, Mocha, SinonJS'
    ]
  },
  {
    employer: 'Rosetta Stone',
    role: 'Studio Recording Technician / ConsumerProduct Support',
    duration: '2012 - 2016',
    description:
      'Monitored and recorded Live Studio Sessions. Created training materials for Studio Recording Technician role. Helped Consumers Troubleshoot personal Rosetta Stone software.',
    projects: [
      'Trained new employees',
      'Created training materials for Studio Recording Tech role',
      'Created inter-dpartmental communication pipeline for recording requests.',
      "Contributed to Product Support's Troubleshooting Manual"
    ],
    tech: [
      'Camtasia',
      'Rosetta Stone product',
      'Microsoft Office Suite (Word, Excel, PowerPoint)',
      'Okta',
      'SalesForce',
      'XML',
      'Adobe Acrobat',
      'Oracle'
    ]
  },
  {
    employer: 'Westover SkatePark',
    role: 'Shift Supervisor',
    duration: '2006 - 2011',
    description:
      'Supervised all skatepark activity. Created employee schedules. Maintained equipment and skatepark cleanliness.',
    projects: [
      'Was recently told by 2 skaters (then children, now adults) that if it were not for me, they would have chosen paths of criminality and self-destruction. Both pursued college degrees, one became a software engineer.',
      'Splinted broken arms and legs.',
      'Stopped fights.',
      'Staved young skaters from dehydration.',
      'Taught an autistic child to ride a skateboard.',
      'Nudged skaters from listening to bad dubstep.'
    ],
    tech: [
      'Canon EOS Rebel XT SLR camera',
      'the under-rated, universal "skate-tool"',
      'allen wrenches',
      'leaf blower',
      'outdated Sony boombox'
    ]
  }
];
/**
 * END Professional Data
 */

/**
  * Contact Data
  */

export const CONTACT_DATA = {
  name: 'Erik Kimsey',
  role: 'Software Engineer',
  phone: '540-278-4525',
  email_1: 'kimseyerik',
  email_2: 'gmail[dot]com'
};

/**
 * ABOUT PAGE - LIL-NAV DATA
 */

export const navListData = [ 'SKILLSET', 'RESUME', 'EDUCATION', 'EXPERIENCE' ];
