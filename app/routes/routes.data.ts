import { Route } from "./routes.types";
import UserRouter from "../feature-modules/user/user.routes";
import ProductRouter from "../feature-modules/product/product.routes";
import AuthRouter from "../feature-modules/auth/auth.routes";

export const routes: Route[] = [
    UserRouter,
    ProductRouter,
    AuthRouter
]