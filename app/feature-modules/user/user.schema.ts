import { Schema, model } from "mongoose";
import { BaseSchema } from "../../utility/base.schema";
import { UserType } from "./user.types";

const userSchema = new BaseSchema({

    name: {
        type: String,
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    profileImage: {
        type: String,
        default: "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
    },

    roles : {
        type: [Schema.Types.ObjectId],
        required: true,
        ref: "roles"
    }

});

export const userModel = model<UserType>("users", userSchema);