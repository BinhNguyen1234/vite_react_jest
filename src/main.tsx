import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider} from "react-router-dom"
import router from './views/index.tsx'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<div> loading</div>}>
    <RouterProvider  router={router}/>
    </Suspense>
  </React.StrictMode>,
)
