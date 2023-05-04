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
      {
        path: "/recipedetails/",
        element: (
          <PrivateRoute>
            <RecipesDetails></RecipesDetails>
          </PrivateRoute>
        ),
        children: [
          {
            path: "/recipedetails/:id",
            element: <ChefDetails></ChefDetails>,
            loader: ({ params }) =>
              fetch(`http://localhost:5173/recipedetails/${params.id}`),
          },
        ],
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>,
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
  // {
  //   path: "/recipedetails",
  //   element: <RecipesDetails></RecipesDetails>,
  // children: [
  //   {
  //     path: "/recipedetails/:id",
  //     element: <ChefDetails></ChefDetails>,
  //     loader: ({ params }) =>
  //       fetch(
  //         `https://chef-recipe-server-side-bakiabdullah.vercel.app/chefdata/${params.id}`
  //       ),
  //   },
  //   ],
  // },

  // {
  //   path: "recipeDetails",
  //   element: <RecipeDetailsLayout></RecipeDetailsLayout>,
  //   children: [
  //     {
  //       path: "/recipedetails",
  //       element: <RecipesDetails></RecipesDetails>,
  //       loader: ({ params }) =>
  //         fetch(
  //           `https://chef-recipe-server-side-bakiabdullah.vercel.app/chefdata/${params.id}`
  //         ),
  //     },
  //   ],
  // },

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
