import Admin from "./pages/Admin/Admin";
import Auth from "./pages/Auth/Auth";
import Basket from "./pages/Basket/basket";
import ProductPage from "./pages/productPage/ProductPage";
import Shop from "./pages/Shop/Shop";
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, PRODUCTS_ROUTE, REGISTRATION_ROUTE, MAIN_ROUTE } from "./utils/consts";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: PRODUCTS_ROUTE + '/:id',
        Component: ProductPage
    }
]