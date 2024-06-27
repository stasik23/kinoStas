import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Layout } from './components/layout/Layout'
import { Inprogress } from './pages/inprogresspage/Inprogress.jsx'
import { Provider } from 'react-redux';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { MainPage } from './pages/mainpage/MainPage.jsx'
import { MoviePage } from './pages/moviepage/MoviePage.jsx'
import { CounterProvider } from './provider/Counter.jsx'
// import store from './utils/store.js'


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
        <MoviePage />
      </Layout>
  },
  {
    path: "*",
    element:
      <Inprogress />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <CounterProvider>
        <RouterProvider router={router} />
      </CounterProvider>
    {/* </Provider> */}
  </React.StrictMode>,
)
