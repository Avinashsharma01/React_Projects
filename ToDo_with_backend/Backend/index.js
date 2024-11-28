import express from 'express';
import dotenv from 'dotenv';
import db from './Database/db.js';
import cors from 'cors';
import path from 'path';
import Todo from './models/Todo.model.js';

dotenv.config();
const app = express();
app.use(cors());
const port = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(path.resolve(), 'public')));



// create a todo
app.post('/create-todo', async (req, res) => {
    const { title } = req.body;
    const todo = new Todo({
        title,
    });

    try {
        await todo.save();
        res.status(201).json(todo);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});




// get all todos
app.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});


// delete a todo
app.delete('/delete-todo/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Todo.findByIdAndDelete(id);
        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});



// update a todo
app.put('/update-todo/:id', async (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(id, { title }, { new: true });
        res.status(200).json(updatedTodo);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});


app.listen(port, () => {
    db();
    console.log(`Server is running on port ${port}`);
}
);