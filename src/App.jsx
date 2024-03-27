import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  useStore  from './zustand/store'

function App() {
  let bears = useStore((state)=>state.bears)
  let count = useStore((state)=>state.count)

  //asi traemos en una sola renderización de a mas estados 
  const { incrementCount, increasePopulation } = useStore(state => ({
    incrementCount: state.increaseCount,
    increasePopulation: state.increasePopulation
  }))

  return (
    <>

      <section> Modification </section>
      <section> second modification </section>
      <section> 3° modification </section>

      <div>
        
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <button onClick={increasePopulation}> + bears </button>
        <button onClick={incrementCount}> + count </button>
        <p>
        the Bears are {bears} 

        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
