import mongoose from "mongoose";

const db = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("MongoDB connected!");
    } catch (error) {
        console.error(error);
    }
};

export default db;