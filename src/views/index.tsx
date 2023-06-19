import { createBrowserRouter } from "react-router-dom";
import DefaultPage from "./default/DefaultPage.view.jsx";
import TestWithUseEffect from "./TestWithUseEffect/TestWithUseEffect.view.js";
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