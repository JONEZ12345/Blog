const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const blog = require("./route/blogRoute");
const user = require("./route/userRoute");
const connectDB = require("./config/db");
const app = express();
const PORT = 5000;

app.use(express.json()); //  Parsing JSON bodies globally

const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Application"],
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/blog", blog);
app.use("/api/user", user);

connectDB();
// listen to port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// app.get("/kelechi", (req, res) => {
//   res.send("Hello Benita and CJ!");
// });

// mongodb://localhost:27017
// mongodb://127.0.0.1:27017/
// connect to db
