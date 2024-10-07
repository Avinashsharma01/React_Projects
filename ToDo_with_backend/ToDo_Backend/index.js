import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
import database from "./database/database.js"
import model from "./models/model.js"


database()
const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))


const port = process.env.PORT || 5000


app.get("/api/create", (req, res)=>{
    const todo = new model({
        id: req.body.id,
        title: req.body.title,
        completed: req.body.completed,
        deletable: req.body.deletable,
    })

    todo.save()
})


app.listen(port, ()=>{
    console.log("Server is running on port ", port)
})


