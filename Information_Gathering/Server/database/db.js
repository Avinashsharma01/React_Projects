import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/InformationG");
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error connecting to database:", error.message);
    process.exit(1); // Exit process with failure
  }
};

connectDB();

export default connectDB;