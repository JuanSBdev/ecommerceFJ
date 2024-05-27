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
        <div className="">
          <Card/>

        </div>
    

    </div>
  )
}
