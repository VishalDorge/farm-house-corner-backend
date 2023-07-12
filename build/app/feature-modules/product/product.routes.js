"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_types_1 = require("../../routes/routes.types");
const router = (0, express_1.Router)();
router.get("/", (req, res, next) => {
    try {
        res.send("done");
    }
    catch (err) {
        next(err);
    }
});
router.get("/:productId", (req, res, next) => {
    try {
        const { productId } = req.params;
    }
    catch (err) {
        next(err);
    }
});
router.post("/", (req, res, next) => {
    try {
    }
    catch (err) {
        next(err);
    }
});
router.patch("/:productId", (req, res, next) => {
    try {
        const { productId } = req.params;
    }
    catch (err) {
        next(err);
    }
});
router.delete("/:productId", (req, res, next) => {
    try {
        const { productId } = req.params;
    }
    catch (err) {
        next(err);
    }
});
exports.default = new routes_types_1.Route("/product", router);
