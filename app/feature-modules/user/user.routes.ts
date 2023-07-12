import { NextFunction, Request, Response, Router } from "express";
import { Route } from "../../routes/routes.types";

const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
    try {
        
    } catch (err) {
        next(err);
    }
})

router.post("/", (req: Request, res: Response, next: NextFunction) => {
    try {
        
    } catch (err) {
        next(err);
    }
})

export default new Route("/user", router);