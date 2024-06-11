const express= require("express")
const mongoose= require("mongoose")
const cors= require("cors")
const student=require("/model/Product")


const app=express()
app.use(cors())

app.post("/",(req,res)=>{
    res.send("Hello")
}
)

app.post("/search",
    (req,res)=>{
        res.send("Welcome to my search page")
    }
)

app.post("/delete",
    (req,res)=>{
        res.send("Welcome to my delete page")
    }
)


app.post("/viewall",
    (req,res)=>{
        res.send("View all page")
    }
)

app.post("/viewlive",
    (req,res)=>{
        res.send("Live")
    }
)

app.listen(8080,()=>{
    console.log("server started")
} 
)