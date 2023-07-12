"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseType = exports.ResponseHandler = void 0;
class ResponseHandler {
    constructor(data, error = null) {
        this.data = data;
        this.error = error;
    }
}
exports.ResponseHandler = ResponseHandler;
class ResponseType {
    constructor(message, statusCode) {
        this.message = message;
        this.statusCode = statusCode;
    }
}
exports.ResponseType = ResponseType;
