const express = require("express");

const stuffRoutes = require("./routes/stuff");
const categoriesRoutes = require("./routes/categories");
const usersRoutes = require("./routes/user");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());

app.use("/stuff", stuffRoutes);
app.use("/categories", categoriesRoutes);
app.use("/users", usersRoutes);

module.exports = app;
