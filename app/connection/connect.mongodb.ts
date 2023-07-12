import { connect } from "mongoose";


export const connectToMongo = async () => {
    try {
        const {MONGO_CONNECTION_URL} = process.env;
        await connect(MONGO_CONNECTION_URL || "");
        console.log("Successfully connected to Database!!");
    } catch (err) {
        console.log("Unable to Connect to Database!!");
    }
}