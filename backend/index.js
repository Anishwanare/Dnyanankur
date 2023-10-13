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


// Serve static files from the build directory
app.use(express.static(path.join(__dirname, "build")));

app.get("/",(req,res)=>{
    // res.send("Hello world")
    res.sendFile(path.join(__dirname, "build", "index.html"));
})

//user Api
app.use("/api",userRouter)


app.listen(PORT , ()=>{
    console.log("server is running at port " + PORT);
})
