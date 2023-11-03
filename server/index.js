import express from "express";


const app=express();


app.use("/",(req,res)=>{
    res.json({msg:"Started"})
})


app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
})