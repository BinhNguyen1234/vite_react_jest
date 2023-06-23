import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider} from "react-router-dom"
import router from './views/index.tsx'
ReactDOM.createRoot(document.getElementById('root1') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)