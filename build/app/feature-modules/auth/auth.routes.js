"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_types_1 = require("../../routes/routes.types");
const router = (0, express_1.Router)();
router.post("/login", (req, res, next) => {
    try {
    }
    catch (err) {
        next(err);
    }
});
router.post("/register", (req, res, next) => {
    try {
    }
    catch (err) {
        next(err);
    }
});
exports.default = new routes_types_1.Route("/auth", router);
