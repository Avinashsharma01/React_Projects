import mongoose from "mongoose";

const todomodel = new mongoose.Schema({
    id: Number,
    title: String,
    completed: false,
    deletable: false,
    date: Date.now()
})

export default mongoose.model("users", todomodel);