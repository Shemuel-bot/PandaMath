import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Sidebar from './Components/Sidebar'
import MainScreenCenter from './Components/MainScreenCenter'

function App() {

  return (
    <>
      <div className='top-container'>
        <Sidebar/>
        <MainScreenCenter/>
      </div>
    </>
  )
}

export default App
