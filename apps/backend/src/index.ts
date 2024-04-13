import express from "express";

const app = express();


app.listen(4000);

app.get("/",(req,res)=>{
    console.log("hi from express server")
    return res.json({
        msg:"all ok"
    })
})

