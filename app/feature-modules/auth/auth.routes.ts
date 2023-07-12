import { NextFunction, Request, Response, Router } from "express";
import { Route } from "../../routes/routes.types";

const router = Router();

router.post("/login", (req: Request, res: Response, next: NextFunction) => {
    try {
        
    } catch (err) {
        next(err);
    }
})

router.post("/register", (req: Request, res: Response, next: NextFunction) => {
    try {
        
    } catch (err) {
        next(err);
    }
})

export default new Route("/auth", router);