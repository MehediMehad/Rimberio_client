import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import AddProduct from "../components/AddProduct";
import Queries from "../pages/Queries/Queries";
import MyQuery from "../pages/MyQuery/MyQuery";
import QueryDetails from "../pages/QueryDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/produces')
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/addProduct',
          element:<AddProduct></AddProduct>
        },
        {
          path:'/queries',
          element: <Queries></Queries>,
          loader: () => fetch('http://localhost:5000/produces')
          
        },
        {
          path:'/myProduct',
          element: <MyQuery></MyQuery>
        },
        {
          path:'/queriDetels/:id',
          element: <QueryDetails></QueryDetails>,
          loader: () => fetch('http://localhost:5000/produces')
        },
      ]
    },
]);

export default router;