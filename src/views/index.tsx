import { createBrowserRouter } from "react-router-dom";
import {lazy} from "react"
const DefaultPage = lazy(()=> import("./default/DefaultPage.view.jsx"))
const TestWithUseEffect = lazy(()=> import("./TestWithUseEffect/TestWithUseEffect.view.jsx"))
const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultPage/>,
    },{
      path: "/TestWithUseEffect",
      element: <TestWithUseEffect/>
    }
  ]);
  export default router