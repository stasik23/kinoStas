import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Layout } from './components/layout/Layout'
import { Inprogress } from './pages/inprogresspage/Inprogress.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { MainPage } from './pages/mainpage/MainPage.jsx'
import { MoviePage } from './pages/moviepage/MoviePage.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element:
      <Layout>
        <MainPage />
      </Layout>,
  },
  {
    path: "/movie/:id",
    element:
      <Layout>
        <MoviePage/>
      </Layout>
  },
  {
    path: "*",
    element:
    <Inprogress/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
