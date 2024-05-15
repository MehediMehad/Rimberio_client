import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import AddProduct from "../components/AddProduct";
import QueryDetails from "../pages/QueryDetails";
import PrivetRout from "../components/PrivetRout";
import Queries from "../pages/Queries/Queries";
import ErrorPage from "../pages/ErrorPage";
import MyRecommendations from "../components/MyRecommendations";
import MyQaaary from "../pages/MyQuery/MyQaaary";
import Updete from "../components/Updete";
import ForMe from "../pages/ForMe/ForMe";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element: <Home></Home>,
            loader: () => fetch('assignment-eleven-server-chi-two.vercel.app/produces')
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
          loader: () => fetch('assignment-eleven-server-chi-two.vercel.app/produces')
          
        },
        {
          path:'/myQuary',
          element: <PrivetRout><MyQaaary></MyQaaary></PrivetRout>,

        },
        {
          path:'/myRecommendations',
          element: <PrivetRout><MyRecommendations></MyRecommendations></PrivetRout>,
          // loader: () => fetch('assignment-eleven-server-chi-two.vercel.app/recommend')
        },
        {
          path:'/queriDetels/:id',
          element: <PrivetRout><QueryDetails></QueryDetails></PrivetRout>,
          loader: () => fetch('assignment-eleven-server-chi-two.vercel.app/produces'),
          
        },
        {
          path:'/updateQarry/:id',
          element: <PrivetRout><Updete></Updete></PrivetRout>,
          loader: ({params}) => fetch(`assignment-eleven-server-chi-two.vercel.app/item/${params.id}`)
          
        },
        {
          path:'forMe',
          element:<PrivetRout><ForMe></ForMe> </PrivetRout>,
          loader: () => fetch('assignment-eleven-server-chi-two.vercel.app/recommend'),
        },
      ]
    },
]);

export default router;