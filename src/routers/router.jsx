import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Add_products from "../components/Add_products/Add_products";
import Root from "../layout/Root/Root";
import My_cart from "../components/My_cart/My_cart";
import Available_cars from "../components/Available_cars/Available_cars";
import Car_details from "../components/Car_details/Car_details";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('data.json')
            },
            {
                path: '/add_products',
                element: <Add_products></Add_products>
            },
            {
                path: '/my_cart',
                element: <My_cart></My_cart>
            },
            {
                path: '/available_cars/:brandName',
                element: <Available_cars></Available_cars>,
                loader: ({params}) => fetch(`http://localhost:5000/cars/${params.brandName}`)
            },
            {
                // path: '/available_cars/:id',
                // element: <Car_details></Car_details>,
                // loader:({params}) => fetch(`http://localhost:5000/car/${params.id}`)

                path: '/car/:id',
                element: <Car_details></Car_details>,
                loader: ({params}) => fetch(`http://localhost:5000/car/${params.id}`)
            }
        ]
    }
])


export default router;