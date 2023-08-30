import { ISkillsCategory } from '@/interfaces/skillsCategory'
import { NERIF_LINK } from './externalLinks'

const PROJECT_NERIF = { name: 'Nerif', link: NERIF_LINK }
const PROJECT_NERIF_CORE = { name: 'Nerif core', link: null }
const PROJECT_PORTFOLIO = { name: 'This website', link: '/' }

export const SKILLS_CATEGORIES: ISkillsCategory[] = [
  {
    name: 'Frontend',
    items: [
      {
        name: 'VueJS',
        logo: '/vuejs-logo.svg',
        projectsUsed: [PROJECT_NERIF],
        id: 'VueJS',
      },
      {
        name: 'React',
        logo: '/react-logo.svg',
        projectsUsed: [PROJECT_PORTFOLIO],
        id: 'React',
      },
      {
        name: 'Typescript',
        logo: '/ts-logo.svg',
        projectsUsed: [PROJECT_PORTFOLIO],
        id: 'Typescript',
      },
      {
        name: 'HTML',
        logo: '/html-logo.svg',
        projectsUsed: [PROJECT_NERIF, PROJECT_PORTFOLIO],
        id: 'HTML',
      },
      {
        name: 'CSS',
        logo: '/css-logo.svg',
        projectsUsed: [PROJECT_NERIF, PROJECT_PORTFOLIO],
        id: 'CSS',
      },
      {
        name: 'SCSS',
        logo: '/scss-logo.svg',
        projectsUsed: [PROJECT_NERIF, PROJECT_PORTFOLIO],
        id: 'SCSS',
      },
      {
        name: 'VueX',
        logo: '/vuejs-logo.svg',
        projectsUsed: [PROJECT_NERIF],
        id: 'VueX',
      },
      {
        name: 'Vue router',
        logo: '/vuejs-logo.svg',
        projectsUsed: [PROJECT_NERIF],
        id: 'Vuerouter',
      },
      {
        name: 'ARIA',
        logo: '/skill-placeholder.svg',
        projectsUsed: [PROJECT_NERIF, PROJECT_PORTFOLIO],
        id: 'ARIA',
      },
      {
        name: 'Responsive layouts',
        logo: '/skill-placeholder.svg',
        projectsUsed: [PROJECT_NERIF, PROJECT_PORTFOLIO],
        id: 'Responsive',
      },
    ],
  },
  {
    name: 'Backend',
    items: [
      {
        name: 'Python',
        logo: '/python-logo.svg',
        projectsUsed: [PROJECT_NERIF],
        id: 'Python',
      },
      {
        name: 'Django',
        logo: '/django-logo.png',
        projectsUsed: [PROJECT_NERIF],
        id: 'Django',
      },
      {
        name: 'PostgreSQL',
        logo: '/postgres-logo.svg',
        projectsUsed: [PROJECT_NERIF],
        id: 'PostgreSQL',
      },
      {
        name: 'Django REST Framework',
        logo: '/drf-logo.png',
        projectsUsed: [PROJECT_NERIF],
        id: 'DRF',
      },
      {
        name: 'NodeJS',
        logo: '/nodejs-logo.svg',
        projectsUsed: [PROJECT_NERIF_CORE],
        id: 'NodeJS',
      },
      {
        name: 'NextJS',
        logo: '/nextjs-logo.svg',
        projectsUsed: [PROJECT_PORTFOLIO],
        id: 'NextJS',
      },
    ],
  },
  {
    name: 'Design',
    items: [
      {
        name: 'Figma',
        logo: '/figma-logo.svg',
        projectsUsed: [PROJECT_NERIF, PROJECT_PORTFOLIO],
        id: 'Figma',
      },
      {
        name: 'Adobe Photoshop',
        logo: '/ps-logo.svg',
        projectsUsed: [PROJECT_NERIF, PROJECT_PORTFOLIO],
        id: 'Photoshop',
      },
      {
        name: 'Framer',
        logo: '/framer-logo.svg',
        projectsUsed: [],
        id: 'Framer',
      },
    ],
  },
  {
    name: 'Tools',
    items: [
      {
        name: 'Git',
        logo: '/git-logo.svg',
        projectsUsed: [PROJECT_NERIF, PROJECT_PORTFOLIO],
        id: 'Git',
      },
      {
        name: 'Puppetteer',
        logo: '/puppetteer-logo.svg',
        projectsUsed: [PROJECT_NERIF_CORE],
        id: 'Puppetteer',
      },
      {
        name: 'Discord API',
        logo: '/discord-logo.svg',
        projectsUsed: [{ name: 'Discord bot', link: null }],
        id: 'DiscordAPI',
      },
      {
        name: 'Vercel',
        logo: '/vercel-logo.svg',
        projectsUsed: [PROJECT_NERIF, PROJECT_PORTFOLIO],
        id: 'Vercel',
      },
      {
        name: 'Jest',
        logo: '/jest-logo.svg',
        projectsUsed: [PROJECT_NERIF],
        id: 'Jest',
      },
      {
        name: 'YandexCloud',
        logo: '/ycloud-logo.svg',
        projectsUsed: [PROJECT_NERIF],
        id: 'YandexCloud',
      },
      {
        name: 'Midjourney',
        logo: '/midjourney-logo.png',
        projectsUsed: [PROJECT_NERIF, PROJECT_PORTFOLIO],
        id: 'Midjourney',
      },
      {
        name: 'ChatGPT',
        logo: '/chatgpt-logo.svg',
        projectsUsed: [PROJECT_NERIF, PROJECT_PORTFOLIO],
        id: 'ChatGPT',
      },
    ],
  },
]
