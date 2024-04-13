import express from "express";

const app = express();


app.get("/",()=>{
    console.log("hi from express server")
})