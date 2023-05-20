import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllToys from "../pages/AllToys/AllToys";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import AddToys from "../pages/AddToys/AddToys";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import MyToys from "../pages/MyToys/MyToys";
import Error from "../pages/Error/Error";
import Blog from "../pages/Blog/Blog";

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error></Error>,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/my-toys',
                element: <MyToys></MyToys>
            },
            {
                path: '/all-toys',
                element: <AllToys></AllToys>,
                loader: () => fetch(`http://localhost:5000/limitToys?limit=20`)
            },
            {
                path: '/add-toy',
                element: <PrivateRoutes><AddToys></AddToys></PrivateRoutes>
            },
            {
                path: '/toy-details/:id',
                element: <PrivateRoutes><ToyDetails></ToyDetails></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
]);