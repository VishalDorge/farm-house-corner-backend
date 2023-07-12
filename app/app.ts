
import express from "express";
import { registerRoutes } from "./routes/routes";
import { connectToMongo } from "./connection/connect.mongodb";

export const startServer = async () => {
    try {
        const app = express();

        await connectToMongo();
        registerRoutes(app);

        const { PORT } = process.env;
        app.listen(PORT || 5001, () => console.log("server is listening on port : " + PORT || 5001));
        
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}