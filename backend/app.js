const express = require("express");

const stuffRoutes = require("./routes/stuff");

const app = express();

app.use(express.json());

app.use("/stuff", stuffRoutes);

module.exports = app;
