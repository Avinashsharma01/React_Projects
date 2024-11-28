import mongoose from "mongoose";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import generateToken from "../JWT/generateToken.js";
import { use } from "bcrypt/promises.js";

const home = (req, res) => {
    res.send("Hello from Home");
};

const findUser = async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).json(user);
    } catch (error) {
        console.error(error); // Log error for debugging
        res.status(500).json({ message: "Internal Server Error" });
    }
}


const signup = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;
    try {
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "password do not match" })
        }
        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ error: "User already exists" })
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            confirmPassword: hashedPassword
        });

        await newUser.save();

        if (newUser) {
            generateToken(newUser._id, res)
            return res.status(201).json({ message: "User created successfully", newUser });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "interval Server Error" });

    }
};


const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });

        const comparepassword = await bcrypt.compare(password, user.password);

        if (!user || !comparepassword || user.email !== email) {
            return res.status(400).json({ error: "Invalid Credentials" });
        }
        // generate token
        generateToken(user._id, res);

        res.status(200).json({
            message: "User Logged in successfully", user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {

    }
}

const logout = (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ message: "User logged out successfully" });
}

export {
    signup,
    home,
    login,
    findUser,
    logout
}
