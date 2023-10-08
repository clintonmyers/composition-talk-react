import { useState } from 'react'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Experiment One: Multiple Counters</h1>
      <div className='counter-container'>
        <div className="counter">
          <button onClick={() => setCount((count) => count - 1)}>
            -
          </button>
          <h1>{count}</h1>
          <button onClick={() => setCount((count) => count + 1)}>
            +
          </button>
        </div>
      </div>
    </>
  )
}

export default App
