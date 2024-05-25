import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  useStore  from './zustand/store'
import { Routes, Route, Link  } from 'react-router-dom'

import StartView  from './views/StartView'
import  Navbar  from './components/NavBar'


function App() {
  let setProductsApi = useStore(state => (state.setProductsApi))
  let products = useStore((state)=>(state.products))
  
    useEffect(()=>{
      setProductsApi()
      console.log(products)
    },[])

  return (
    <>
   
      <Navbar></Navbar>

    <Routes>
       <Route path="/" element={
        <>
        <h1>Ecommerce Test I</h1>
        </>
                            }/>

       <Route path="/start" element={  <StartView/>  }  />
    </Routes>
    </>
  )
}

export default App
