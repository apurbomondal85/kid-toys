import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllToys from "../pages/AllToys/AllToys";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import AddToys from "../pages/AddToys/AddToys";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/all-toys',
                element: <PrivateRoutes><AllToys></AllToys></PrivateRoutes>
            },
            {
                path: '/add-toy',
                element: <PrivateRoutes><AddToys></AddToys></PrivateRoutes>
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