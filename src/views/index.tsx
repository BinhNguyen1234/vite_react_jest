import { createBrowserRouter } from "react-router-dom";
import DefaultPage from "./default/DefaultPage.view.jsx";
const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultPage/>,
    },
  ]);
  export default router