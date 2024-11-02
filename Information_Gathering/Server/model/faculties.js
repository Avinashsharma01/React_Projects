import mongoose from "mongoose";


const facultySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    messages: [  // Changed to an array to store multiple messages
        {
            type: String,
            required: true
        }
    ]
});

const Faculty = mongoose.model("Faculty", facultySchema);
export default Faculty;