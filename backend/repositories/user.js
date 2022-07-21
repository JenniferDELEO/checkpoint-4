const connection = require("../db-config");

exports.createUser = async (firstname, lastname, email, password) => {
  let sql =
    "INSERT INTO users (firstname, lastname, email, password) VALUES (?, ?, ?, ?)";
  await connection.promise().query(sql, [firstname, lastname, email, password]);
  return { firstname, lastname, email, password };
};

exports.getAllUsers = async () => {
  let sql = "SELECT * FROM users";
  const result = await connection.promise().query(sql, []);
  return result[0];
};

exports.getOneUser = async (id) => {
  let sql = "SELECT * FROM users WHERE id = ?";
  const result = await connection.promise().query(sql, [id]);
  return result[0];
};

exports.deleteUser = async (id) => {
  let sql = "DELETE FROM users WHERE id = ?";
  await connection.promise().query(sql, [id]);
};
