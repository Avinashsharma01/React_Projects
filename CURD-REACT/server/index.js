const express= require("express")
const mongoose= require("mongoose")
const cors= require("cors")
const usermodel= require("./models/user")
const app=express()

app.use(cors())
app.use(express.json())
 

try {
    mongoose.connect("mongodb://localhost:27017/curdWithReact")
    console.log("Database connected")
} catch (error) {
    console.log(error)
}


app.get("/", (req, res)=>{
    usermodel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


app.get("/getUser/:id", (req, res)=>{
    const id = req.params.id
    usermodel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})



app.put("/updateUser/:id", (req, res)=>{
    const id = req.params.id
    let {name , email, password}= req.body
    usermodel.findByIdAndUpdate({_id:id}, {name, email, password})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})
 
app.post("/createUser", async (req, res)=>{
    usermodel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
    
})

app.listen(3000, ()=>{
    console.log("Server is listeing......")
})