const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRouter);

app.get("/test", (req, res) => {
  res.send("Backend is working!");
});

module.exports = app;
