import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import BookARoom from './Components/BookARoom.jsx'
import Contact from './Components/Contact.jsx'
import Meals from './Components/Meals.jsx'
import Error from './Components/Error.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element: <About/>
      },
      {
        path:"bookARoom",
        element:<BookARoom/>
      },
      {
        path:"contact",
        element:<Contact/>
      },{
        path:"meals",
        element:<Meals/>
      }
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RouterProvider router={router} />
  </StrictMode>,
)
