/**
 * @typedef {Object} Project
 * @property {string} screenshot - URL of the project screenshot.
 * @property {string} description - Description of the project.
 * @property {string} tech - Technologies used in the project.
 * @property {string} url - URL of the project.
 */

/** @type {Project[]} */
const projects = [
  {
    screenshot:
      'https://raw.githubusercontent.com/maritocuate/talkcorner/main/talkcorner/public/screenshot.png',
    title: 'Public chat room',
    description:
      'Public chat room connected to Socket Io. Saves messages in a SQL database in Turso App. Displays connected users in the side panel. Allows editing the name and stores it in the localstorage.',
    tech: 'ReactJs Socket.Io Turso Express',
    url: 'https://talkcorner.vercel.app/',
  },
  {
    screenshot:
      'https://raw.githubusercontent.com/maritocuate/salvemospatitas/main/public/screenshot.png',
    title: 'Animal shelter',
    description:
      'Landing page for an animal shelter. It has a login system with Kinde that allows you to make donations and subscribe to the email campaign.\nStores user information in a Mongo database and accepts payments through MercadoPago API.',
    tech: 'NextJs Tailwindcss TS MatterJs Prisma',
    url: 'https://salvemospatitas.vercel.app/',
  },
  {
    screenshot:
      'https://raw.githubusercontent.com/maritocuate/mbank/main/public/images/screenshot1.png',
    title: 'Balance dashboard',
    description:
      'Simple NextJS app to review balance and generate transactions. Uses Prisma to access to MongoDB. Zustand to manage the store, NextAuth for the login system and Tailwindcss for the styles.',
    tech: 'NextJs Zustand Prisma TailwindCSS',
    url: 'https://mbank-three.vercel.app/',
  },
  {
    screenshot:
      'https://raw.githubusercontent.com/maritocuate/marbnb/main/public/screenshot.png',
    title: 'Airbnb clone',
    description:
      'This project runs on Next 13 with TypeScript. For the styles, tailwindcss and Zustand were chosen for the management of states. To save images Cloudinary and MongoDB.',
    tech: 'NextJs Zustand Nextauth Mongodb Sass',
    url: 'https://eclectic-churros-0472f9.netlify.app/',
  },
  {
    screenshot:
      'https://raw.githubusercontent.com/maritocuate/3d-portfolio/main/public/screenshot.png',
    title: '3D portfolio',
    description:
      'This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.',
    tech: 'ReactJs ThreeJs TailwindCSS',
    url: 'https://3d-portfolio-beta-five.vercel.app/',
  },
  {
    screenshot:
      'https://raw.githubusercontent.com/maritocuate/react-criptomonedas/master/public/screenshot.png',
    title: 'Cryptocurrencies',
    description:
      'Single Page Application to convert cryptocurrencies with the cryptocompare API. Styled components and moduleCSS to style components.',
    tech: 'ReactJs Axios',
    url: 'https://hardcore-jones-d2ffc9.netlify.app/',
  },
  {
    screenshot:
      'https://raw.githubusercontent.com/maritocuate/messenger/main/public/screenshot.png',
    title: 'Messenger clone',
    description:
      'Messenger app clone for chatting with other contacts, individually or in groups. This project runs on Next 13 with TypeScript. For the styles, tailwindcss and Zustand were chosen for the management of states. To save images Cloudinary and MongoDB. Pusher was use to handle messages in real time.',
    tech: 'NextJs PusherJs Zustand Prisma Sass',
    url: 'https://messenger-rho-taupe.vercel.app/',
  },
]

export default projects
