import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Add_products from "../components/Add_products/Add_products";
import Root from "../layout/Root/Root";
import My_cart from "../components/My_cart/My_cart";
import Available_cars from "../components/Available_cars/Available_cars";
import Car_details from "../components/Car_details/Car_details";
import Update_page from "../components/Update_page/Update_page";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Error_page from "../components/Error_page/Error_page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("data.json"),
            },
            {
                path: "/add_products",
                element: (
                    <PrivateRoute>
                        <Add_products></Add_products>
                    </PrivateRoute>
                ),
            },
            {
                path: "/my_cart",
                element: <My_cart></My_cart>,
                // loader: ({ params }) =>
                //     fetch(
                //         `https://carhub-server-7b4gnmwge-mohammad-ashifs-projects.vercel.app/car/${params.id}`
                //     ),
            },
            {
                path: "/available_cars/:brandName",
                element: <Available_cars></Available_cars>,
                loader: ({ params }) =>
                    fetch(
                        `https://carhub-server-7b4gnmwge-mohammad-ashifs-projects.vercel.app/cars/${params.brandName}`
                    ),
            },
            {
                path: "/car/:id",
                element: (
                    <PrivateRoute>
                        <Car_details></Car_details>
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(
                        `https://carhub-server-7b4gnmwge-mohammad-ashifs-projects.vercel.app/car/${params.id}`
                    ),
            },
            {
                path: "/update_info/:id",
                element: <Update_page></Update_page>,
                loader: ({ params }) =>
                    fetch(
                        `https://carhub-server-7b4gnmwge-mohammad-ashifs-projects.vercel.app/carInfo/${params.id}`
                    ),
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
                path: "*",
                element: <Error_page></Error_page>,
            },
        ],
    },
]);

export default router;
