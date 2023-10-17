const express = require("express");
const cors = require("cors");
const mongoData = require("./db");
const userRouter = require("./routes/userRoutes");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 3000;

mongoData();


// Define a catch-all route to serve the index.html for all non-static routes
app.get("/*", (req, res) => {
  res.send("Hello World");
});

// User API
app.use("/api", userRouter);

app.listen(PORT, () => {
  console.log("Server is running at port " + PORT);
});
