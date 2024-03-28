import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  useStore  from './zustand/store'
import { Routes, Route  } from 'react-router-dom'

import StartView  from './views/StartView'

function App() {
  // let bears = useStore((state)=>state.bears)
  // let count = useStore((state)=>state.count)

  // //asi traemos en una sola renderización de a mas estados 
  // const { incrementCount, increasePopulation } = useStore(state => ({
  //   incrementCount: state.increaseCount,
  //   increasePopulation: state.increasePopulation
  // }))

  return (
    <>
    <p>asd</p>
    <Routes>
       <Route path="/asd" element={  <StartView/>  }  />
    </Routes>
    </>
  )
}

export default App
