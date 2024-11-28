import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
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

    confirmPassword: {
        type: String,
        required: true
    }

}, { timestamps: true }); // timestamps will automatically add createdAt and updatedAt fields

const User = mongoose.model('ChatUser', userSchema);

export default User;