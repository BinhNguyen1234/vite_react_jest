import { useState ,useEffect } from 'react'
import reactLogo from '@assets/react.svg'
import viteLogo from '@assets/vite.svg'
import './TestWithUseEffect.style.css'

function TestWithUseEffect() {
  const [count, setCount] = useState(0)
    useEffect(()=>{
        setCount(1)
    },[])
  return (
    <>
    {console.log(count)}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + UseEffectTest</h1>
      <div className="card">
        <button  onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default TestWithUseEffect
