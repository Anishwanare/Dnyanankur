const express = require("express")
const cors = require("cors")
const mongoData = require("./db")
const userRouter = require("./routes/userRoutes")


const app = express();
app.use(express.json());
app.use(cors());
app.use(express.json({ limit: "10mb" }));

    const PORT = process.env.PORT || 3000;

mongoData();

app.get("/",(req,res)=>{
    res.send("Hello world")
})

//user Api
app.use("/api",userRouter)


app.listen(PORT , ()=>{
    console.log("server is running at port " + PORT);
})