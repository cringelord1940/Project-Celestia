export type tNavSecondaryRoute = {
  id: number
  title: string
  setBackRoute: string
  scrollable?: boolean
  showFooter?: boolean
  showNav?: boolean
  route: {
    title: string
    path: string
  }[]
}

type routeKeys = 'project' | 'post' | 'portfolio' | 'about' | 'tools'

export type tNavSecondaryRoutes = {
  [Key in routeKeys]: tNavSecondaryRoute
}

export const navSecondaryRoutes: tNavSecondaryRoutes = {
  project: {
    id: 1,
    title: 'Projects',
    setBackRoute: '/project',
    route: [
      {
        title: 'Highlights',
        path: '/project',
      },
      {
        title: 'Categories',
        path: '/project/categories',
      },
      {
        title: 'Content',
        path: '/project',
      },
    ],
  },
  post: {
    id: 2,
    title: 'Posts',
    setBackRoute: '/post',
    route: [
      {
        title: 'Highlights',
        path: '/post',
      },
      {
        title: 'Categories',
        path: '/post/categories',
      },
      {
        title: 'Content',
        path: '/post',
      },
    ],
  },
  portfolio: {
    id: 4,
    title: 'Portfolio',
    setBackRoute: '/portfolio',
    route: [
      {
        title: 'Graphics',
        path: '/portfolio/graphics',
      },
      {
        title: 'Dev',
        path: '/portfolio/dev',
      },
    ],
  },
  about: {
    id: 10,
    title: 'About',
    setBackRoute: '/about',
    route: [
      {
        title: 'Overall',
        path: '/about',
      },
      {
        title: 'Skills',
        path: '/about/skills',
      },
    ],
  },
  tools: {
    id: 30,
    title: 'Tools',
    setBackRoute: '/tools',
    scrollable: false,
    route: [
      {
        title: 'GLSL Editor',
        path: '/tools/glslEditor',
      },
      {
        title: 'Clock',
        path: '/tools/clock',
      },
    ],
  },
}
