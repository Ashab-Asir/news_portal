import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "news",
    element: <div>News world!</div>,
  },
  {
    path: "auth",
    element: <div>auth world!</div>,
  },
  {
    path: "*",
    element: <div>Error world!</div>,
  },
]);

export default Router;
