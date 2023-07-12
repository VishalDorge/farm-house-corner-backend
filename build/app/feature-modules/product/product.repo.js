"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_schema_1 = require("./product.schema");
const findOne = (filter) => product_schema_1.productModel.findOne(Object.assign(Object.assign({}, filter), { isDeleted: false }));
const update = (filter, data) => product_schema_1.productModel.updateMany(filter, data);
const create = (product) => product_schema_1.productModel.create(product);
const aggregate = (pipeline) => product_schema_1.productModel.aggregate(pipeline);
exports.default = {
    findOne,
    update,
    create,
    aggregate
};
