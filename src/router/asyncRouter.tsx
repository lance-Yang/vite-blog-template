import { Suspense, lazy } from 'react'
import { Outlet, Navigate } from 'react-router-dom'

import Layout from '../components/Layout'

import NotFound from '../components/404'
const Home = lazy(() => import('../home'))
const About = lazy(() => import('../about'))
const LinkPage = lazy(() => import('../link'))
const MdPage = lazy(() => import('../md'))

const LayoutComponent = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export const AsyncRouter = [
  {
    path: '/',
    element: <LayoutComponent />,
    auth: false,
    children: [
      { path: '/home', element: <Home />, auth: false },
      { path: '/about', element: <About />, auth: false },
      { path: '/auth', element: <About />, auth: true },
      { path: '/link', element: <LinkPage />, auth: true },
      { path: '/md/:id', element: <MdPage />, auth: true },
      { path: '*', element: <NotFound />, auth: false }
    ]
  }
]
