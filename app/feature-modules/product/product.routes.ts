import { NextFunction, Request, Response, Router, query } from "express";
import { Route } from "../../routes/routes.types";
import { IProduct } from "./product.types";
import productServices from "./product.services";
import { ResponseHandler } from "../../utility/response.handler";

const router = Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await productServices.find(req.query);
        res.send(new ResponseHandler(result));
    } catch (err) {
        next(err);
    }
})

// router.get("/:productId", async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const { productId } = req.params;
//         const result = await productServices.findOne({_id: productId});
//         res.send(new ResponseHandler(result));
//     } catch (err) {
//         next(err);
//     }
// })

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const product: IProduct = req.body;
        const result = await productServices.create(product);
        res.send(new ResponseHandler(result));
    } catch (err) {
        next(err);
    }
})

router.patch("/:productId", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { productId } = req.params;
        const data = req.body;
        const result = await productServices.update({_id: productId}, data);
        res.send(new ResponseHandler(result));
    } catch (err) {
        next(err);
    }
})

router.delete("/:productId", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { productId } = req.params;
        const result = await productServices.remove(productId);
        res.send(new ResponseHandler(result));
    } catch (err) {
        next(err);
    }
})

export default new Route("/product", router);