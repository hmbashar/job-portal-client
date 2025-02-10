import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/Register/Register";
import Signin from "../pages/Signin/Signin";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h1>404 Not Found!</h1>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
    ],
  },
]);

export default router;
