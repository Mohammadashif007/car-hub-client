import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Add_products from "../components/Add_products/Add_products";
import Root from "../layout/Root/Root";
import My_cart from "../components/My_cart/My_cart";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/add_products',
                element: <Add_products></Add_products>
            },
            {
                path: '/my_cart',
                element: <My_cart></My_cart>
            }
        ]
    }
])


export default router;