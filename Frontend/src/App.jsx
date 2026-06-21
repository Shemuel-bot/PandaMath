import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Sidebar from './Components/Sidebar.jsx'
import Home from './Components/Home.jsx'
import Academy from './Components/Academy.jsx'

function App() {

  return (
    <>
      <div className='top-container'>
        <Sidebar/>
        <main className='main-content'>
          <Outlet/>
        </main>
      </div>
    </>
  )
}

export default App
