import Main from "../../Layout/Main";
import AddMenu from "../../Pages/AddMenu/AddMenu";
import Blogs from "../../Pages/Blogs/Blogs";
import DetailsMenu from "../../Pages/DetailsMenu/DetailsMenu";
import FAQ from "../../Pages/FAQ/FAQ";
import FoodMenu from "../../Pages/FoodMenu/FoodMenu";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Myreview from "../../Pages/Myreview/Myreview";
import SignUp from "../../Pages/SignUp/SignUp";
import UserReviews from "../../Pages/UserReviews/UserReviews";
import Errorpage from "../../Shared/Errorpage/Errorpage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        errorElement:<Errorpage></Errorpage>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },     
            {
                path:'/foodmenu',
                element:<FoodMenu></FoodMenu>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/faq',
                element:<FAQ></FAQ>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/foodCard',
                element:<FoodMenu></FoodMenu>
            },
            {
                path:'/details/:id',
                element:<DetailsMenu></DetailsMenu>,
                loader:({params}) => fetch(`https://food-first-server-site.vercel.app/services/${params.id}`)
            },
           
            {
                path:'/addMenu',
                element:<AddMenu></AddMenu>
            },
            {
                path:'/myreview/:id',
                element:<Myreview></Myreview>,
                loader:({params}) => fetch(`https://food-first-server-site.vercel.app/reviews/${params.id}`)
            },
            {
                path:'/userreview',
                element:<UserReviews></UserReviews>
            }

        ]
    }

]);

export default router;