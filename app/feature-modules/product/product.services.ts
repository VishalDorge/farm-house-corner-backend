import { FilterQuery, UpdateQuery } from "mongoose";
import { IProduct } from "./product.types";
import { ProductResponses } from "./product.responses";
import productRepo from "./product.repo";
import { CustomPipeline } from "../../utility/generate.pipeline";

const findOne = (filter: FilterQuery<IProduct>) => productRepo.findOne(filter);

const create = async (product: IProduct) => {
    const existingProduct = await findOne({name: product.name})
    if(existingProduct) throw ProductResponses.PRODUCT_ALREADY_EXIST;
    return productRepo.create(product);
}

const update = async (filter: FilterQuery<IProduct>, data: UpdateQuery<IProduct>) => {
    const product = findOne(filter);
    if(!product) throw ProductResponses.PRODUCT_NOT_FOUND;
    const result = await productRepo.update(filter, data);
    if(result.modifiedCount <= 0) throw ProductResponses.UNABLE_TO_PROCEED;
    return ProductResponses.PRODUCT_UPDATE_SUCCESS;
}

const remove = async (productId: string) => {
    const product = findOne({_id: productId});
    if(!product) throw ProductResponses.PRODUCT_NOT_FOUND;
    const result = await productRepo.update({_id: productId}, {isDeleted: true});
    if(result.modifiedCount <= 0) throw ProductResponses.UNABLE_TO_PROCEED;
    return ProductResponses.PRODUCT_DELETE_SUCCESS;
}

const find = (query: any) => {
    const pipeline = new CustomPipeline(query).generate();
    return productRepo.aggregate(pipeline);
}

export default {
    findOne,
    find,
    update,
    remove,
    create
}