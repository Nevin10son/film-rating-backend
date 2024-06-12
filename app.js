const express = require("express")
const mongoose = require("mongoose")
const cors =  require("cors")
const {filmmodel} = require("./models/film")


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://Nevin:nevintensonk@cluster0.0rfrr.mongodb.net/filmdb?retryWrites=true&w=majority&appName=Cluster0')

app.post("/add",(req,res)=>{
    const input = req.body
    const film = new filmmodel(input)
    film.save()
    console.log(employee)
    res.json({status:"success"})

    
})

app.post("/search",(req,res)=>{
    const input = req.body
    filmmodel.find(input).then(
        (data)=>{
            res.json(data)
            

        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
    


})

app.post("/delete",(req,res)=>{
    let input = req.body
    filmmodel.findByIdAndDelete(input._id).then(
        (response)=>{
            
            
            res.json({Status:"success"})
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})



app.get("/view",(req,res)=>{
    filmmodel.find().then(
        (data)=>{
            res.json(data)

        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})





app.listen(8008,()=>{
    console.log("server started")
})