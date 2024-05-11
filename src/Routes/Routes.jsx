import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import AddProduct from "../components/AddProduct";
import MyQuery from "../pages/MyQuery/MyQuery";
import QueryDetails from "../pages/QueryDetails";
import PrivetRout from "../components/PrivetRout";
import Queries from "../pages/Queries/Queries";

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
          element:<PrivetRout><AddProduct></AddProduct></PrivetRout>
        },
        {
          path:'/queries',
          element: <Queries></Queries>,
          loader: () => fetch('http://localhost:5000/produces')
          
        },
        {
          path:'/myProduct',
          element: <PrivetRout><MyQuery></MyQuery></PrivetRout>
        },
        {
          path:'/queriDetels/:id',
          element: <PrivetRout><QueryDetails></QueryDetails></PrivetRout>,
          loader: () => fetch('http://localhost:5000/produces')
        },
      ]
    },
]);

export default router;