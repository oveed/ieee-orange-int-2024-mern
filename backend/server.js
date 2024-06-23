require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const itemRoutes = require("./routes/items");

// express app
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/items", itemRoutes);

// connect to db
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to database");
    app.listen(4000, () => {
      console.log("listening for requests on port", 4000);
    });
  })
  .catch((err) => {
    console.log(err);
  });
