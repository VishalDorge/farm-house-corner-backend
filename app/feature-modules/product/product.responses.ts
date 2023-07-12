import { ResponseType } from "../../utility/response.handler";

export const ProductResponses = {
    PRODUCT_NOT_FOUND : new ResponseType("Invalid Product ID", 404),
    PRODUCT_ALREADY_EXIST : new ResponseType("Product Already Exist", 409),
    UNABLE_TO_PROCEED: new ResponseType("Not Able to Proceed Currently", 400),
    PRODUCT_UPDATE_SUCCESS: new ResponseType("Successfully Updated the Product", 200),
    PRODUCT_DELETE_SUCCESS: new ResponseType("Successfully Deleted the Product", 204)
}