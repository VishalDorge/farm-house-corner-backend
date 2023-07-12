import { Document } from "mongoose";

export interface IUser {
    _id?: string;
    name?: string;
    email: string;
    password: string;
}

export type UserType = IUser & Document;