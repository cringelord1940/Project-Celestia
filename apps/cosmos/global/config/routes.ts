// export { navSecondaryRoutes } from './routes.secondary'
// export type {
//   tNavSecondaryRoutes,
//   tNavSecondaryRoute,
// } from './routes.secondary'

type Route = {
  title: string
  path: string
}

export const routes: Route[] = [
  {
    title: 'HOME',
    path: '/home',
  },
  {
    title: 'ABOUT',
    path: '/about',
  },
  {
    title: 'PROJECTS',
    path: '/project',
  },
  {
    title: 'BLOG',
    path: '/post',
  },
  {
    title: 'APP',
    path: '/app',
  },
]
