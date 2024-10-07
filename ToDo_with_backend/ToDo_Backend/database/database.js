import mongoose from "mongoose";
import dotenv from "dotenv" 
dotenv.config();


const connectDB = async () => {
    try {
        // "mongodb://localhost:27017/ToDoApp"
        await mongoose.connect("mongodb://localhost:27017/ToDoApp",{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
};

export default connectDB