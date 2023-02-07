import Admin from "./pages/Admin/AdminContainer";
import Auth from "./pages/Auth/Auth";
import BasketContainer from "./pages/Basket/basketContainer";
import ProductPage from "./pages/productPage/ProductPage";
import Shop from "./pages/Shop/Shop";
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, PRODUCTS_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: BasketContainer
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
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