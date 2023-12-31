import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import ChefDetails from "../pages/Home/ChefDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Registration";
import Contact from "../pages/Contact/Contact";
import RecipesDetails from "../pages/RecipesDetails/RecipesDetails";
import RecipeDetailsLayout from "../layouts/RecipeDetailsLayout";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BlogPdf from "../pages/Blogs/BlogPdf";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // {
      //   path: "/recipedetails/",
      //   element: (
      //     <PrivateRoute>
      //       <RecipesDetails></RecipesDetails>
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: "/blog",
        element: <BlogPdf></BlogPdf>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "/recipedetails/:id",
    element: <RecipeDetailsLayout></RecipeDetailsLayout>,
    children: [
      {
        path: "/recipedetails/:id",
        element: (
          <PrivateRoute>
            <RecipesDetails></RecipesDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://chef-recipe-server-side-bakiabdullah.vercel.app/recipedetails/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
