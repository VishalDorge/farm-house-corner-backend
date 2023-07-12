import { FilterQuery, UpdateQuery } from "mongoose";
import { IProduct } from "./product.types";
import { productModel } from "./product.schema";


const findOne = (filter: FilterQuery<IProduct>) => productModel.findOne({ ...filter, isDeleted: false });
const update = (filter: FilterQuery<IProduct>, data: UpdateQuery<IProduct>) => productModel.updateMany(filter, data);
const create = (product: IProduct) => productModel.create(product);

export default {
    findOne,
    update,
    create
}
