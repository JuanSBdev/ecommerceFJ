import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  useStore  from './zustand/store'
import { Routes, Route, Link  } from 'react-router-dom'

import StartView  from './views/StartView'

function App() {


  return (
    <>
        < Link to={'/'}><button> Router Inicio </button></Link>
        < Link to={'/start'}><button> Router Example </button></Link>

    <Routes>
       <Route path="/" element={<>
        <h1>Ecommerce con Fede</h1>
       </>}  />

       <Route path="/start" element={  <StartView/>  }  />
    </Routes>
    </>
  )
}

export default App
