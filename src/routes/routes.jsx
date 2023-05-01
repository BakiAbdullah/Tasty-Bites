import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/blog',
        element: <Blogs></Blogs>
      }
    ],
  },

  // {
  //   path: "/",
  //   element: <LoginLayout></LoginLayout>,
  //   children: [
  //     {
  //       path: "/login",
  //       element: <Login></Login>,
  //     },
  //     {
  //       path: "/register",
  //       element: <Registration></Registration>,
  //     },
  //   ],
  // },
]);

export default router;
