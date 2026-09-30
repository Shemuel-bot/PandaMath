import { StrictMode } from 'react'
import { createRoot,  } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './Components/Home.jsx'
import SignIn from './Modules/SignIn.jsx'
import SignUp from './Modules/SignUp.jsx'
import Academy from './Components/Academy.jsx'
import Default from './Components/Default.jsx'
import Training from './Components/Training.jsx'
import Play from './Components/Play.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Default />
      },
      {
        path: 'home',
        element: <Home/>
      },
      {
        path: 'academy',
        element: <Academy/>,
      },
      {
        path: 'training',
        element: <Training/>
      },
      {
        path: 'play',
        element: <Play/>
      }
    ]
  },
  {
    path:'/sign-in',
    element: <SignIn/>
  },
  {
    path: '/sign-up',
    element: <SignUp/>
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
