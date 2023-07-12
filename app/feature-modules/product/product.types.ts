import { Document } from "mongoose";

export interface IProduct {
    _id?: string;
    name: string;
    price: number;
    quantity?: number;
    image: string;
    description: string;
}

export type ProductType = IProduct & Document;