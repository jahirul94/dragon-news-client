import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Category from "../pages/Home/Category/Category";
import NewsLayOut from "../Layout/NewsLayOut";
import News from "../pages/News/News/News";
import LoginLayOut from "../Layout/LoginLayOut";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
    {
      path:'/',
      element : <LoginLayOut></LoginLayOut>,
      children :[
        {
            path : '/',
            element : <Navigate to='/category/0'></Navigate>
        },
        {
          path : 'login',
          element :<Login></Login>
        },
        {
            path :'register',
            element : <Register></Register>
        }
      ] 

    },
    {
       path:'category',
       element : <Main></Main>,
       children :[
        {
            path :':id',
            element : <Category></Category>,
            loader : ({params}) => fetch(`http://localhost:5000/catagories/${params.id}`)
        }
       ] 
    },
    {
     path :'news',
     element :<NewsLayOut></NewsLayOut>,
     children :[
        {
            path :':id',
            element :<PrivateRoutes><News></News></PrivateRoutes>,
            loader :({params})=> fetch(`http://localhost:5000/news/${params.id}`)
        }
     ]
    }
])

export default router;
