/* Single source of truth for every word on the site. Edit here, nowhere else. */

export const profile = {
  name: 'Vijay Krishna Kudva',
  role: 'Engineering Leader: Platforms & Global Teams',
  pedigree: 'Ex Uber · Myntra · Intuit',
  location: 'Bangalore, India',
  status: 'Open to Senior Engineering Leadership roles, globally',
  email: 'nvkudva@gmail.com',
  phones: ['+91 96325 44966', '+1 650 772 1555'],
  resume: '/public/resume/Vijay-Krishna-Kudva-Resume.pdf',
  resumeMeta: { size: '98 KB', updated: 'Updated 2026' },

  lede: [
    'Engineering leader with <em>17+ years in technology</em> and <em>6+ years building and scaling engineering organizations</em>.',
  ],

  personal:
    'Millennial. Bangalore for 17 years, the US for 3. Passionate techie, gadget hoarder, outdoor adventurer, dad.',
};

export const stats = [
  { v: '17+', k: 'Years in technology' },
  { v: '3→24', k: 'Org scaled, 3 countries' },
  { v: '14M+', k: 'Consumers served' },
  { v: '30k+', k: 'Global agents on my platforms' },
];

/* From the AI-org tenets in his own leadership deck. */
export const tenets = [
  {
    t: 'What can be done by AI should be done by AI',
    d: 'Not a slogan: an allocation rule. Human attention is the scarcest thing in the org, so it goes where judgement is actually required.',
  },
  {
    t: 'Every engineer is a tech lead of AI agents',
    d: 'Multitasking, delegation and review become the core skills. One human directing many coder agents, reviewing their work rather than typing all of it.',
  },
  {
    t: 'Prompting, evals and fine-tuning are the new ops',
    d: 'The same rigour that went into CI, monitoring and on-call now goes into agent evaluation, guardrails and feedback loops.',
  },
  {
    t: 'Guardrails are not optional',
    d: 'Input guardrails for prompt injection, output guardrails against data leaks, tool access control, and a human in the loop where the blast radius is real.',
  },
];

/* Platform work — the things that ran at scale, not the weekend repos. */
export const platforms = [
  {
    name: 'CO Console: Onboarding & Configuration Platform',
    org: 'Uber',
    years: '2018 – 2025',
    body: 'Owned the strategic roadmap for Uber’s business onboarding platform inside the Customer Obsession org. Orchestrated integrations across 12+ business lines and 8+ third-party partners, Instacart, NYTaxi and Yellow Cabs, and autonomous mobility partners Motional, WeRide and Waymo.',
    metrics: [
      ['90%', 'less onboarding time'],
      ['50%', 'faster project delivery'],
      ['84%', 'Salesforce licence reduction'],
    ],
  },
  {
    name: "Uber's First Gen AI Bot",
    org: 'Uber',
    years: '2024 – 2025',
    body: 'Led the experimental integration of Uber’s first GenAI-powered support bot for business customers, on the customer-care infrastructure.',
    metrics: [['1st', 'GenAI bot for B2B support']],
  },
  {
    name: 'UI Platform Modernization',
    org: 'Uber',
    years: '2020 – 2023',
    body: 'Led 16+ engineers through the modernization of Uber’s complete Customer Care UI platform. Cut the widget migration process from 15 steps and 23 statuses to 7.',
    metrics: [
      ['4wk → 5d', 'widget development'],
      ['80%+', 'reduction in build time'],
    ],
  },
  {
    name: 'Hydration Gateway: one GraphQL + RPC middleware layer',
    org: 'Uber',
    years: '2020 – 2023',
    body: 'Built a single GraphQL + RPC middleware layer that connects the Customer Care UI to most of Uber’s service layers. It was designed for backend hydration and then enabled frontend hydration on the same platform, instead of solving the same need twice.',
    metrics: [
      ['GraphQL + RPC', 'UI and backend hydration'],
      ['Most', 'of Uber’s service layers'],
    ],
  },
  {
    name: 'BlissNxt: Next-Gen Customer Care UI',
    org: 'Uber',
    years: '2019 – 2021',
    body: 'Built Uber’s next-generation Customer Care UI serving 30,000+ global agents on millions of tickets, plus the Blis mosaic component library that later seeded multiple CO apps.',
    metrics: [
      ['3×', 'faster loads'],
      ['40%', 'faster ticket resolution'],
    ],
  },
  {
    name: 'Myntra PWA',
    org: 'Myntra',
    years: '2016 – 2018',
    body: 'Architected Myntra’s Progressive Web App from scratch, an instant-loading, app-like mobile web experience built for 3G India, served from 6 Node servers behind Akamai to 14M monthly users.',
    metrics: [
      ['37%', 'conversion lift'],
      ['100k → 14M', 'monthly users'],
      ['71%', 'smaller JS bundles'],
    ],
  },
  {
    name: 'Myntra AMP',
    org: 'Myntra',
    years: '2017',
    body: 'Rebuilt Myntra’s entire site on Google AMP in seven days, single-handedly for the first MVP, one of the first sites to ship amp-bind, with 100,000+ pages indexed and interactive product pages few AMP sites had. Showcased on stage at Google I/O 2017, and I sat on a Google DevFest panel on the project.',
    metrics: [
      ['7d', 'to rebuild on AMP'],
      ['12%', 'revenue increase'],
      ['100k+', 'pages indexed'],
    ],
  },
  {
    name: 'Unity: Myntra’s enterprise UI framework',
    org: 'Myntra',
    years: '2014 – 2018',
    body: 'A from-scratch React framework: template architecture, smart component library, thematic engine, and a configuration-driven UI model that let teams launch apps in hours instead of months. When Myntra acquired Jabong, the framework absorbed their apps without rework.',
    metrics: [
      ['50+', 'internal apps powered'],
      ['8wk → 7d', 'app delivery cycle'],
    ],
  },
];

/* Public GitHub repos. Descriptions marked `draft: true` are my inference —
   rewrite them in your own words. Everything else came from GitHub itself. */
/* `deployUrl` drives both the QR code and the screenshot. `status`:
   live | no-deployment | broken-deployment | not-web.
   Descriptions below were rewritten from the actual running apps, except
   where `draft: true` still marks an inference. */
export const projects = [
  {
    name: 'omni-api', title: 'Omni', lang: 'Python', updated: '2026-10-18',
    wip: true, status: 'no-deployment',
    video: '/public/media/omni-api.mp4',
    shot: '/public/shots/omni-api.jpg',
    desc: 'Every local model your app needs, behind one port. A local CLI that runs, supervises and serves chat, decisions, embeddings, images, video, speech-to-text and text-to-speech. Apps ask for a role, never a model name or engine port, so any OpenAI SDK works; each worker is isolated and restarted on its own, with a live playground.',
  },
  {
    name: 'vega-web', title: 'Vega', lang: 'TypeScript', updated: '2026-10-12',
    wip: true, status: 'live',
    deployUrl: 'https://vega-onnx.pages.dev',
    shot: '/public/shots/vega-web.jpg',
    desc: 'A typed decision model running fully in the browser on WebAssembly. Ask choice, score or boolean questions over text or images, calibrated probabilities, nothing leaves the tab.',
  },
  {
    name: 'mini-harness', title: 'Mini Harness', lang: 'JavaScript', updated: '2026-10-01',
    status: 'no-deployment',
    shot: '/public/shots/mini-harness.jpg',
    video: '/public/media/mini-harness.mp4',
    desc: 'A coding agent in about 160 lines of Node.js. No dependencies, and it works with any OpenAI-compatible local LLM.',
  },
  {
    name: 'Smart-News', title: 'SmartNews', lang: 'TypeScript', updated: '2026-09-08',
    status: 'live',
    deployUrl: 'https://smartnews.nvkudva.workers.dev',
    video: '/public/media/smart-news.mp4',
    shot: '/public/shots/smart-news.jpg',
    desc: 'A news reader that clusters one story across every outlet covering it, eight sources collapsed into a single card with a neutral summary, filtered by locality rather than by outrage.',
  },
  {
    name: 'smart-photo-deduper', title: 'Smart Photo Deduper', lang: 'JavaScript', updated: '2026-09-26',
    status: 'live',
    deployUrl: 'https://nvkudva.github.io/smart-photo-deduper/',
    desc: 'Chrome extension that finds and removes duplicate photos in Google Photos.',
  },
  {
    name: 'Smart-LocalAI', title: 'Smart LocalAI', lang: 'JavaScript', updated: '2026-10-18',
    status: 'no-deployment',
    video: '/public/media/smart-localai.mp4',
    shot: '/public/shots/smart-localai.jpg',
    desc: 'Chrome sidebar extension, a chat and page agent like Claude for Chrome. Talk in the sidebar and let the model edit the current page, powered by LM Studio, Ollama, or any LLM endpoint.',
  },
  {
    name: 'HyperLight', title: 'Hyperlight', lang: 'Python', updated: '2026-10-27',
    wip: true, status: 'not-web',
    video: '/public/media/hyperlight.mp4',
    shot: '/public/shots/hyperlight.jpg',
    desc: 'Spotlight replaced on Apple Silicon: documents, code, photos, mail, contacts, calendar and System Settings in one semantic index. EmbeddingGemma 2 for meaning and Whisper for voice search, with gemma2:2b answering questions over the top matches, every one of them on the Mac, nothing leaves it.',
  },
  {
    name: 'activity-monitor-pro', title: 'Activity Monitor Pro', lang: 'Swift', updated: '2026-10-14',
    wip: true, status: 'not-web',
    video: '/public/media/activity-monitor-pro.mp4',
    shot: '/public/shots/activity-monitor-pro.jpg',
    desc: 'The system monitor developers actually wanted. One window for CPU, memory, energy, disk and network per process, by app, by tree, by agent, straight from Darwin and Mach.',
  },
  {
    name: 'm-wardrobe', title: 'M Wardrobe', lang: 'TypeScript', updated: '2026-10-10',
    status: 'live',
    deployUrl: 'https://m-wardrobe.nvkudva.workers.dev',
    video: '/public/media/m-wardrobe.mp4',
    shot: '/public/shots/m-wardrobe.jpg',
    desc: 'A tech demo: real-time cloth physics on a mobile web page. Every garment is a cloth simulation on a hanger, solved in plain JavaScript and drawn with WebGL through Three.js.',
  },
  {
    name: 'ollajev', title: 'Ollajev', lang: 'Python', updated: '2026-10-08',
    status: 'live',
    deployUrl: 'https://nvkudva.github.io/ollajev/',
    video: '/public/media/ollajev.mp4',
    shot: '/public/shots/ollajev.jpg',
    desc: 'Like Ollama, for decision models. Pull a System One model from Hugging Face and run it on your machine behind the same /v1/systemone API as the hosted Jev.',
  },
  {
    name: 'laya-server', title: 'Laya Server', lang: 'Python', updated: '2026-09-22',
    status: 'no-deployment',
    shot: '/public/shots/laya-server.jpg',
    desc: 'A local FastAPI server for the Laya decision model. A drop-in replacement for TypeSafe’s Jev API that returns calibrated probabilities from one forward pass.',
  },
  {
    name: 'WaveKey', title: 'WaveKey', lang: 'Kotlin', updated: '2026-09-07',
    license: 'GPL-3.0', status: 'not-web',
    site: 'https://nvkudva.github.io/WaveKey/',
    shot: '/public/shots/wavekey.jpg',
    desc: 'Voice-first Android keyboard: HeliBoard’s typing engine with on-device voice intelligence.',
  },
  {
    name: 'bhagavad-geeta', title: 'Bhagavad Geeta', lang: 'TypeScript', updated: '2026-09-07',
    status: 'live',
    deployUrl: 'https://bhagavad-geeta.nvkudva.workers.dev',
    video: '/public/media/bhagavad-geeta.mp4',
    shot: '/public/shots/bhagavad-geeta.jpg',
    desc: 'All 18 chapters in Devanagari with English, Kannada and Telugu alongside. Verse search, a daily verse, adjustable reading size, built to be studied, not skimmed.',
  },
  {
    name: 'AgentOS', title: 'AgentOS', lang: 'TypeScript', updated: '2026-09-07',
    wip: true, current: true, status: 'live',
    deployUrl: 'https://agentos.nvkudva.workers.dev',
    shot: '/public/shots/agentos.jpg',
    desc: 'Atrium: a desktop for running teams of agents. One room per function, each with a lead agent delegating to the rest, a dock of tools they share, and a single bar you talk to. Twenty agents, and you watch the work land.',
  },
  {
    name: 'gym-budy-claude', title: 'Gym Buddy', lang: 'TypeScript', updated: '2026-09-07',
    wip: true, status: 'live',
    deployUrl: 'https://gymbuddy-600845087494.us-west1.run.app/',
    host: 'Google Cloud Run',
    shot: '/public/shots/gym-buddy.jpg',
    desc: 'AI-powered gym exercise tracker with a glass UI, personalized weekly plans via Gemini, and an AI coach chatbot.',
  },
  {
    name: 'SmartFin', title: 'SmartFin', lang: 'TypeScript', updated: '2026-08-27',
    private: true, status: 'closed-source',
    shot: '/public/shots/smartfin.jpg',
    desc: 'Impact intelligence for financial teams. Role-based workspaces, relationship manager, analyst, auditor, each seeing the same portfolio through the lens their job actually needs.',
  },
  {
    name: 'AI-Doctor', title: 'AI Doctor', lang: 'TypeScript', updated: '2026-09-08',
    wip: true, current: true, status: 'live',
    deployUrl: 'https://aidoctor.nvkudva.workers.dev',
    shot: '/public/shots/ai-doctor.jpg',
    desc: 'A hospital-branded virtual visit. No intake forms, you talk to Dr. Mira, and a licensed doctor reviews every plan before it reaches the patient.',
  },
  {
    name: 'Maga-Lang', title: 'MagaLang', lang: 'JavaScript', updated: '2026-09-07',
    wip: true, status: 'live',
    deployUrl: 'https://nvkudva.github.io/Maga-Lang/',
    shot: '/public/shots/maga-lang.jpg',
    desc: 'A toy programming language with Kannada keywords, and a zero-build browser playground for writing and running it, `helu maga` instead of `print`.',
  },
  {
    name: 'super-flash', title: 'Super Flash', lang: 'TypeScript', updated: '2026-10-18',
    status: 'no-deployment',
    shot: '/public/shots/super-flash.jpg',
    desc: 'A Flash-style animation editor that runs entirely in the browser, draw shapes, tween them on a timeline, attach real JavaScript to movie events, and export a still, a video, or one self-contained HTML file.',
  },
];

export const experience = [
  {
    org: 'AI & Tech Enthusiast',
    years: 'May 2025 – Present', where: 'India',
    title: 'Applied AI Sabbatical : Prototyping the software factory',
    builtProjects: ['omni-api', 'vega-web', 'Smart-News', 'HyperLight'],
    points: [
      'Planned break after relocating from the US to India; used it to go deep, hands-on, into applied AI.',
      'Spent a year as my own engineering org: agents as the team, me on intent, review and release; a live test of what a software factory needs.',
      'Shipped multiple projects across diverse scope and platforms. Several ran side by side in my own little AI software factory, while I experimented with multiple agent orchestration tools.',
      'Tested local open-weight models for real coding work, the cost, privacy and build-vs-buy call every AI-native team will face.',
      'Next: build and lead the AI-native engineering team; humans set intent and quality bars, agent pipelines do the repeatable work in a self learning and evolving loop.',
    ],
  },
  {
    org: 'Uber',
    years: 'Dec 2018 – May 2025', where: 'USA & India',
    roles: [
      {
        title: 'Engineering Manager II', years: 'Dec 2018 – May 2025', where: 'California, USA',
        built: [0, 1],
        points: [
          'Scaled the org from 3 to 24+ engineers across the US, India and Brazil; onboarded 2 engineering managers and their 14-engineer teams into one cross-geo pod structure.',
          'Owned the strategic roadmap for Uber’s business onboarding platform inside the Customer Obsession org, and spearheaded the CO Console onboarding and configuration platform, onboarding time down by up to 90%.',
          'Orchestrated integrations across 12+ business lines and 8+ third-party partners, Instacart, NYTaxi and Yellow Cabs, and autonomous mobility partners Motional, WeRide and Waymo.',
          'Drove the Salesforce → CO migration, an 84% licensing reduction saving millions from 2024 onward.',
          'Led conversational channel platform work across Chat, WhatsApp and Email.',
        ],
      },
      {
        title: 'Engineering Manager I', years: '2018 – 2021', where: 'Bangalore, India',
        built: [2, 3],
        points: [
          'Led 16+ engineers on the Customer Care UI platform modernization across multiple apps.',
          'Built the strategy for the omnichannel support solution, the most complex piece of the program.',
          'Hired across the architecture, hiring-manager and campus lead interview rounds, and grew upcoming leaders in the team.',
          'Cultivated a cross-org UI community with discussion forums and feedback loops, and built trust across teams in the US, Latin America and India.',
        ],
      },
      {
        title: 'Senior Software Engineer', years: '2018 – 2021', where: 'Bangalore, India',
        built: [4],
        points: [
          'Built BlissNxt serving 30,000+ global agents, 3× faster loads, 40% faster ticket resolution.',
          'Cut the widget migration process from 15 steps and 23 statuses to 7, taking widget development from 4 weeks to 5 days.',
          'Ran the BlissNxt migration with the running support business intact.',
          'Shipped on Salesforce Virtual GL, Bliss-Insights and help.uber.com automation components rather than rebuilding them.',
        ],
      },
    ],
  },
  {
    org: 'Myntra',
    years: 'Jan 2014 – Dec 2018', where: 'Bangalore, India',
    roles: [
      {
        title: 'Frontend Architect', years: '2016 – Dec 2018',
        built: [5, 6],
        points: [
          'Architected Myntra’s PWA, 37% conversion lift, 100K to 14M monthly users, 3× faster loads, 71% smaller JS bundles. Served from 6 Node servers behind Akamai: 3.1s versus 9.4s for the old site on fast 3G, and 5.2s versus 27s for Flipkart and Treebo on slow 3G.',
          'Rebuilt the site on AMP in 7 days with Google, 100,000+ pages indexed and among the first sites to ship amp-bind, for a 12% revenue increase. Showcased on stage at Google I/O 2017.',
        ],
      },
      {
        title: 'Senior Software Engineer', years: 'Jan 2014 – 2016',
        built: [7],
        points: [
          'Built Myntra’s mobile site from scratch with three engineers, first MVP in a couple of weeks, on hardware and browsers down to low-end Android and Opera.',
          'Engineered Unity, the React framework that standardized development across 50+ internal applications, and sat in most of Myntra’s web UI decisions.',
        ],
      },
    ],
  },
  {
    org: 'Intuit',
    years: 'Jan 2008 – Dec 2013', where: 'Bangalore, India',
    title: 'Senior Software Engineer',
    points: [
      'Built a cross-platform hybrid UI framework across the QuickBooks ecosystem and an online-banking app that ran on desktop, tablets, and inside native Android and iOS webviews.',
      'Rated “outstanding” in 4 of 5 annual reviews.',
      'Won the Intuit Android App Challenge in 2011.',
      'Youngest recipient of the Intuit India Innovation Award.',
    ],
  },
];

export const strengths = {
  Leadership: ['Org design & scaling', 'GenAI adoption', 'Platform strategy & architecture', 'Cross-geo execution', 'Operational excellence'],
  'Applied AI': ['AI agents', 'Multi-agent orchestration','Local LLMs', 'On-device inference', 'WebAssembly inference', 'Coding agents', 'Voice interfaces'],
  Technical: ['JavaScript', 'React', 'Node.js', 'GraphQL', 'Webpack', 'Web architecture', 'PWA', 'RPC', 'Microservices', 'Java'],
};

export const speaking = [
  { y: '2017', t: 'Google I/O: Myntra’s AMP implementation, showcased on stage', tag: 'Keynote' },
  { y: '2018', t: 'Google AMP Roadshow, Bangalore: keynote on AMP architecture', tag: 'Keynote' },
  { y: '2017', t: 'Fragments Android Conference: Building Practical PWAs at Scale', tag: 'Talk' },
  { y: '2018', t: 'Flipkart SlashN: the Myntra web technology evolution', tag: 'Talk' },
  { y: '2018', t: 'React Meetup Bangalore: building high-performance sites with React and PWA', tag: 'Talk' },
  { y: '2017', t: 'Google Hack Day: Best Progressive Web App award, Gurugram', tag: 'Award' },
  { y: '2010', t: 'Intuit India Innovation Award', tag: 'Award' },
];

export const writing = [
  { t: 'Myntra’s PWA Architecture', d: 'Sep 2018', u: 'https://medium.com/@nvkudva' },
  { t: 'How we built Unity: crafting Myntra’s enterprise UI platform in React', d: 'Sep 2018', u: 'https://medium.com/@nvkudva' },
  { t: 'Micro Apps: building block of Myntra’s scalable UI architecture', d: 'Sep 2018', u: 'https://medium.com/@nvkudva' },
  { t: 'We built Myntra’s PWA from scratch and here are the results', d: 'Jan 2018', u: 'https://medium.com/@nvkudva' },
  { t: 'Myntra’s Web UI journey, AMP and PWA', d: 'Jan 2018', u: 'https://medium.com/@nvkudva' },
];

export const education = [
  { d: 'Master of Computer Applications', o: 'PES University, Bangalore', y: '2005 – 2008' },
  { d: 'B.Sc. Computer Science, Electronics & Mathematics', o: 'Mangalore University', y: '2002 – 2005' },
];

export const socials = [
  { n: 'GitHub', h: '@nvkudva', u: 'https://github.com/nvkudva', i: 'github' },
  { n: 'LinkedIn', h: 'in/nvkudva', u: 'https://www.linkedin.com/in/nvkudva/', i: 'linkedin' },
  { n: 'Medium', h: '@nvkudva', u: 'https://medium.com/@nvkudva', i: 'medium' },
  { n: 'Résumé', h: 'PDF · 98 KB', u: '/public/resume/Vijay-Krishna-Kudva-Resume.pdf', i: 'doc' },
];

export const icons = {
  github: 'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38v-1.33C3.8 14.36 3.33 12.9 3.33 12.9c-.36-.92-.89-1.17-.89-1.17-.72-.5.06-.49.06-.49.8.06 1.22.82 1.22.82.71 1.22 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 014 0c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A8 8 0 008 0z',
  linkedin: 'M3.6 14.4H.6V5.4h3v9zM2.1 4.1a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM15.4 14.4h-3V9.9c0-1.07-.02-2.44-1.49-2.44-1.5 0-1.72 1.16-1.72 2.36v4.58h-3V5.4h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v4.73z',
  medium: 'M2.37 4.76a.55.55 0 00-.18-.47L.87 2.69v-.24h4.1l3.17 6.95 2.79-6.95H14.9v.24l-1.13 1.08a.33.33 0 00-.13.32v8.07a.33.33 0 00.13.32l1.1 1.08v.24H9.33v-.24l1.14-1.11c.11-.11.11-.14.11-.32V5.62l-3.18 8.07h-.43L3.28 5.62v5.41a.75.75 0 00.2.62l1.49 1.8v.24H.74v-.24l1.48-1.8a.72.72 0 00.19-.62V4.76z',
  mail: 'M1.5 2h13c.8 0 1.5.7 1.5 1.5v9c0 .8-.7 1.5-1.5 1.5h-13C.7 14 0 13.3 0 12.5v-9C0 2.7.7 2 1.5 2zm6.5 6.2L14.6 3.4H1.4L8 8.2zM1 4.6v7.9L6 8.9 1 4.6zm14 0L10 8.9l5 3.6V4.6zM7 9l-5 3.9h12L9 9l-1 .7L7 9z',
  live: 'M3.5 3A1.5 1.5 0 002 4.5v8A1.5 1.5 0 003.5 14h8a1.5 1.5 0 001.5-1.5V9h-1.5v3.5h-8v-8H7V3H3.5zM9.5 1.5V3h2.44L7.22 7.72l1.06 1.06L13 4.06V6.5h1.5v-5h-5z',
  doc: 'M9 0H3.5A1.5 1.5 0 002 1.5v13A1.5 1.5 0 003.5 16h9a1.5 1.5 0 001.5-1.5V5L9 0zm0 1.5L12.5 5H9V1.5zM4.5 8h7v1h-7V8zm0 2.5h7v1h-7v-1zm0-5h3v1h-3v-1z',
  phone: 'M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58z',
};
