import { useState ,useEffect, lazy, Suspense } from 'react'
import reactLogo from '@assets/react.svg'
import viteLogo from '@assets/vite.svg'
import './TestWithUseEffect.style.css'
import { Link } from 'react-router-dom'
let InstrucionClick = lazy(()=> import('../../components/instruction/ClickInstruction.component.tsx'))
function TestWithUseEffect() {
  const [count, setCount] = useState(0)
    useEffect(()=>{
        setCount(1)
    
    },[])
  return (
    <>
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
      <Link to="/">
        Click to change route
      </Link>
      <Suspense  fallback={<div>Loading...</div>}>
      <InstrucionClick/>
      </Suspense>
    </>
  )
}

export default TestWithUseEffect
