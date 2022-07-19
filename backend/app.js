const express = require("express");

// const albumRoutes = require("./routes/album");
// const trackRoutes = require("./routes/track");

const app = express();

app.use(express.json());

// app.use("/album", albumRoutes);
// app.use("/track", trackRoutes);

module.exports = app;
