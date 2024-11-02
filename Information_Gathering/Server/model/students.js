import mongoose from "mongoose";

// Updated student schema
const studentSchema = new mongoose.Schema({
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
    course: {
        type: String,
        required: true,
    },
    branch: {
        type: String,
        required: true,
    },
    enrollment: {
        type: String,
        required: true,
    },
    // Messages array contains objects with message content and faculty reference
    messages: [
        {
            message: {
                type: String,
                required: true,
            },
            date: {
                type: Date,
                default: Date.now,
            },

            // i will use this for formate date
            // const utcDate = new Date('2024-10-22T18:33:22.102Z'); // UTC time
            // const istDate = new Date(utcDate.getTime() + (5.5 * 60 * 60 * 1000)); // Convert to IST

            // console.log(istDate.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));

            faculty:
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Faculty", // Reference to the Faculty model
                required: true,
            },
            facultyEmail: {
                type: String,
                required: true,
            },

        }
    ]
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
