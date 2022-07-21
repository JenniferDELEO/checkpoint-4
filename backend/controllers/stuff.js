const connection = require("../db-config");

exports.createThing = (req, res) => {
  const { title, description, imageUrl, price, categoryId, userId } = req.body;
  connection
    .promise()
    .query(
      "INSERT INTO stuff (title, description, imageUrl, price, categoryId, userId) VALUES (?, ?, ?, ?, ?, ?)",
      [title, description, imageUrl, price, categoryId, userId]
    )
    .then(() => {
      res.status(201).send({
        title,
        description,
        imageUrl,
        price,
        categoryId,
        userId,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error creating your thing");
    });
};

exports.modifyThing = (req, res) => {
  const { id } = req.params;
  const { title, description, imageUrl, price } = req.body;
  console.log(title, description, imageUrl, price);
  connection
    .promise()
    .query(
      `UPDATE stuff SET title=?, description=?, imageUrl=?, price=? WHERE stuff.id = ?`,
      [title, description, imageUrl, price, id]
    )
    .then(() => {
      res.status(201).send({
        id,
        title,
        description,
        imageUrl,
        price,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error updating your thing");
    });
};

exports.deleteThing = (req, res) => {
  const { id } = req.params;
  connection
    .promise()
    .query("DELETE FROM stuff WHERE stuff.id = ?", [id])
    .then(() => {
      res.status(200).send("Thing has been successfully deleted");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error deleting your thing");
    });
};

exports.getAllStuff = (req, res) => {
  connection
    .promise()
    .query("SELECT * FROM stuff")
    .then(([results]) => {
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error retrieving the stuff from the database");
    });
};

exports.getOneThing = (req, res) => {
  const { id } = req.params;
  connection
    .promise()
    .query("SELECT * FROM stuff s WHERE s.id = ?", [id])
    .then(([results]) => {
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error retrieving the stuff from the database");
    });
};
