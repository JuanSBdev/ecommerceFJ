import React from 'react'

import useStore from '../zustand/store';
import Card from '../components/Card'


export default function StartView() {
    let {count, increasePopulation, incrementCount, bears }  = useStore((state)=> ({
        count: state.count, 
        bears: state.bears,
        increasePopulation: state.increasePopulation,
        incrementCount: state.increaseCount
    }))    

    let products = useStore((state)=>(state.products))

  return (
    <div>


        <h1>Products</h1>
        <div className="flex">
          <Card/>

        </div>
    
      {/* <div className="card">
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
      </p> */}


    </div>
  )
}
