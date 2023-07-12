"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_responses_1 = require("./product.responses");
const product_repo_1 = __importDefault(require("./product.repo"));
const generate_pipeline_1 = require("../../utility/generate.pipeline");
const findOne = (filter) => product_repo_1.default.findOne(filter);
const create = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const existingProduct = yield findOne({ name: product.name });
    if (existingProduct)
        throw product_responses_1.ProductResponses.PRODUCT_ALREADY_EXIST;
    return product_repo_1.default.create(product);
});
const update = (filter, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_repo_1.default.update(filter, data);
    if (result.modifiedCount <= 0)
        throw product_responses_1.ProductResponses.UNABLE_TO_PROCEED;
    return product_responses_1.ProductResponses.PRODUCT_UPDATE_SUCCESS;
});
const remove = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const product = findOne({ _id: productId });
    if (!product)
        throw product_responses_1.ProductResponses.PRODUCT_NOT_FOUND;
    const result = yield product_repo_1.default.update({ _id: productId }, { isDeleted: true });
    if (result.modifiedCount <= 0)
        throw product_responses_1.ProductResponses.UNABLE_TO_PROCEED;
    return product_responses_1.ProductResponses.PRODUCT_DELETE_SUCCESS;
});
const find = (query) => {
    const pipeline = new generate_pipeline_1.CustomPipeline(query).generate();
    return product_repo_1.default.aggregate(pipeline);
};
exports.default = {
    findOne,
    find,
    update,
    remove,
    create
};
