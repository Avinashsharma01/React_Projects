import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import db from './database/db.js';
import path from 'path';
import router from './routes/route.js';
import cors from 'cors';
const app = express();

const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(path.resolve(), 'public')));

app.use('/api', router);


app.listen(port, () => {
    db();
    console.log(`Server is running on port ${port}`);
});

