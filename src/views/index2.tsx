import {   createMemoryRouter } from "react-router-dom";
import DefaultPage from "./default/DefaultPage.view.tsx";
import TestWithUseEffect from "./TestWithUseEffect/TestWithUseEffect.view.tsx";
const router = createMemoryRouter([
    {
      path: "/",
      element: <DefaultPage/>,
    },{
      path: "/TestWithUseEffect",
      element: <TestWithUseEffect/>
    }
  ]);
  export default router