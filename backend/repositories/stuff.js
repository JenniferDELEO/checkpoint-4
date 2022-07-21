const connection = require("../db-config");

exports.getAllStuff = async (title) => {
  let sql = "SELECT * FROM stuff";
  const sqlValues = [];
  if (title) {
    sql += " WHERE title LIKE CONCAT ('%', ?, '%')";
    sqlValues.push(title);
  }
  const result = await connection.promise().query(sql, sqlValues);
  return result[0];
};
