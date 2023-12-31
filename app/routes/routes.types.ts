import { Router } from "express";

export class Route {

    private usedPaths: string[] = [];

    constructor(public path: string, public router: Router) {
        if(this.usedPaths.includes(path)){
            throw {statusCode: 400, message: "Path is Already in Use"};
        }else this.usedPaths.push(path);
    }

}