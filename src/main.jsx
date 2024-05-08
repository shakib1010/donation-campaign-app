import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Routes/Home/Home'
import Donation from './Routes/Donation/Donation'
import App from './App'
import Statistics from './Routes/Statistics/Statistics'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'donation',
        element: <Donation />,
      },
      {
        path: 'statistics',
        element: <Statistics />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
