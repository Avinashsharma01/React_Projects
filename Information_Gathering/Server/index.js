import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import db from './database/db.js';
import Student from './model/students.js';
import Faculty from './model/faculties.js';
import router from './routes/Route.js';


const app = express();
dotenv.config();

const PORT = process.env.PORT || 8004;
// Middleware
app.use(cors({
    origin: 'http://localhost:5001', // replace with your frontend origin
    methods: ['GET', 'POST'],
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(path.resolve(), 'public')));



// Route for faculty to post a message to a student
app.use("/", router);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);
