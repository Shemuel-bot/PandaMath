import { StrictMode } from 'react'
import { createRoot,  } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import MainScreenCenter from './Components/MainScreenCenter.jsx'
import SignIn from './Modules/SignIn.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children: [
      {
        path: 'home',
        element: <MainScreenCenter/>
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
