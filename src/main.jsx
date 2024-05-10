import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home, { Loader as homeLoader } from './Routes/Home/Home'
import Donations, {
  Loader as donationsLoader,
} from './Routes/Donations/Donations'
import App from './App'
import Statistics from './Routes/Statistics/Statistics'
import Donation, { Loader as donationLoader } from './Routes/Donation/Donation'
import CreateData from './Routes/CreateData/CreateData'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: homeLoader,
      },
      {
        path: 'donation/:id',
        loader: donationLoader,
        element: <Donation />,
      },
      {
        path: 'donations',
        loader: donationsLoader,
        element: <Donations />,
      },
      {
        path: 'statistics',
        element: <Statistics />,
      },
      {
        path: 'create',
        element: <CreateData />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
