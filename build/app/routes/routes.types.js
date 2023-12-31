"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
class Route {
    constructor(path, router) {
        this.path = path;
        this.router = router;
        this.usedPaths = [];
        if (this.usedPaths.includes(path)) {
            throw { statusCode: 400, message: "Path is Already in Use" };
        }
        else
            this.usedPaths.push(path);
    }
}
exports.Route = Route;
