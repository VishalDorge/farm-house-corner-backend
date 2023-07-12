"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const user_routes_1 = __importDefault(require("../feature-modules/user/user.routes"));
const product_routes_1 = __importDefault(require("../feature-modules/product/product.routes"));
const auth_routes_1 = __importDefault(require("../feature-modules/auth/auth.routes"));
exports.routes = [
    user_routes_1.default,
    product_routes_1.default,
    auth_routes_1.default
];
