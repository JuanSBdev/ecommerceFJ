import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  useStore  from './zustand/store'
import { Routes, Route, Link  } from 'react-router-dom'

import StartView  from './views/StartView'


function App() {
  let setProductsApi = useStore(state => (state.setProductsApi))
  let products = useStore((state)=>(state.products))
  
    useEffect(()=>{
      setProductsApi()
      console.log(products)
    },[])

  return (
    <>
        < Link to={'/'}><button> Router Inicio </button></Link>
        < Link to={'/start'}><button> Router Example </button></Link>

    <Routes>
       <Route path="/" element={<>
        <h1>Ecommerce con Fede</h1>
        {products.map((p, i)=> <p key={i}> { p.title }</p>)}

       </>}  />

       <Route path="/start" element={  <StartView/>  }  />
    </Routes>
    </>
  )
}

export default App
