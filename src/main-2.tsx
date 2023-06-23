import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider} from "react-router-dom"
import router from './views/index2.tsx'
ReactDOM.createRoot(document.getElementById('root2') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)