"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductResponses = void 0;
const response_handler_1 = require("../../utility/response.handler");
exports.ProductResponses = {
    PRODUCT_NOT_FOUND: new response_handler_1.ResponseType("Invalid Product ID", 404),
    PRODUCT_ALREADY_EXIST: new response_handler_1.ResponseType("Product Already Exist", 409),
    UNABLE_TO_PROCEED: new response_handler_1.ResponseType("Not Able to Proceed Currently", 400),
    PRODUCT_UPDATE_SUCCESS: new response_handler_1.ResponseType("Successfully Updated the Product", 200),
    PRODUCT_DELETE_SUCCESS: new response_handler_1.ResponseType("Successfully Deleted the Product", 204)
};
