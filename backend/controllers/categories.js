const connection = require("../db-config");

exports.getAllCategories = (req, res) => {
  connection
    .promise()
    .query("SELECT * FROM categories")
    .then(([results]) => {
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error retrieving the categories from the database");
    });
};

exports.getOneCategorie = (req, res) => {
  const { id } = req.params;
  connection
    .promise()
    .query("SELECT * FROM categories c WHERE c.id = ?", [id])
    .then(([results]) => {
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error retrieving the category from the database");
    });
};
