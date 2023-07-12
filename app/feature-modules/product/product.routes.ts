import { NextFunction, Request, Response, Router } from "express";
import { Route } from "../../routes/routes.types";

const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
    try {
        res.send("done");
    } catch (err) {
        next(err);
    }
})

router.get("/:productId", (req: Request, res: Response, next: NextFunction) => {
    try {
        const { productId } = req.params;
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

router.patch("/:productId", (req: Request, res: Response, next: NextFunction) => {
    try {
        const { productId } = req.params;
    } catch (err) {
        next(err);
    }
})

router.delete("/:productId", (req: Request, res: Response, next: NextFunction) => {
    try {
        const { productId } = req.params;
    } catch (err) {
        next(err);
    }
})

export default new Route("/product", router);