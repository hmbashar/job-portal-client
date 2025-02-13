import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/Register/Register";
import Signin from "../pages/Signin/Signin";
import Home from "../pages/Home/Home";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplication from "../pages/MyApplication/MyApplication";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJob from "../pages/MyPostedJob/MyPostedJob";
import ViewApplications from "../pages/ViewApplications/ViewApplications";

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
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "signin",
        element: <Signin></Signin>,
      },
      {
        path: "job/:id",
        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
      },
      {
        path:'my-application',
        element: <PrivateRoute><MyApplication></MyApplication></PrivateRoute>
      },
      {
        path:"job-apply/:id",
        element: <PrivateRoute><JobApply></JobApply></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:3000/job-apply/${params.id}`)
      }, 
      {
        path:'my-posted-job',
        element: <PrivateRoute><MyPostedJob></MyPostedJob></PrivateRoute>
      },
      {
        path: 'view-applications/:job_id',
        element: <PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:3000/job-application/jobs/${params.job_id}`)
      },
      {
        path:'addjob',
        element: <AddJob></AddJob>
      }
    ],
  },
]);

export default router;
