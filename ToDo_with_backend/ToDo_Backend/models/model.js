import mongoose from "mongoose";

const todomodel = new mongoose.Schema({
    id: Number,
    title: String,
    completed: false,
    deletable: false,
})

export default mongoose.model("users", todomodel);