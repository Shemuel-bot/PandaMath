import { StrictMode } from 'react'
import { createRoot,  } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './Components/Home.jsx'
import SignIn from './Modules/SignIn.jsx'
import Academy from './Components/Academy.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children: [
      {
        path: 'home',
        element: <Home/>
      },
      {
        path: 'academy',
        element: <Academy/>
      }
    ]
  },
  {
    path:'/sign-in',
    element: <SignIn/>
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
