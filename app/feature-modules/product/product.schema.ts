import { model } from "mongoose";
import { BaseSchema } from "../../utility/base.schema";
import { ProductType } from "./product.types";

const productSchema = new BaseSchema({

    name: {
        type: String,
        required: true,
        unique: true
    },

    price: {
        type: Number,
        required: true
    },

    quantity: {
        type: Number,
        default: 1
    },

    image: {
        type: String,
        required: true,
        unique: true
    },

    description: {
        type: String,
        required: true,
        unique: true
    }

});

export const productModel = model<ProductType>("products", productSchema);