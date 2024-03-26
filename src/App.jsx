import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  useStore  from './zustand/store'

function App() {
  const [count, setCount] = useState(0)
  let bears = useStore((state)=>state.bears)
  return (
    <>
<<<<<<< HEAD
      <section> Modification </section>
      <section> second modification </section>
=======

      <section> Modification </section>
      <section> second modification </section>
      <section> 3° modification </section>

>>>>>>> 9031983f8bc5c5d9aa97aa0d9f5ad1308c54d519
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p>
        there is {bears} bears

        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
