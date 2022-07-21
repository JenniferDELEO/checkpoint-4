const userRepo = require("../repositories/user");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

exports.createUser = async (req, res) => {
  const body = req.body;
  const salt = genSaltSync(10);
  body.password = hashSync(body.password, salt);
  try {
    const result = await userRepo.createUser(
      body.firstname,
      body.lastname,
      body.email,
      body.password
    );
    res.status(201).send(result);
  } catch (error) {
    console.error("Error creating new user", error);
    res.status(500).sned("Error creating new user");
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const result = await userRepo.getAllUsers();
    res.status(200).send(result);
  } catch (error) {
    console.error("Error retrieving users from database", error);
    res.send(500).send("Error retrieving users from database");
  }
};

exports.getOneUser = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await userRepo.getOneUser(id);
    res.status(200).send(result);
  } catch (error) {
    console.error("Error retrieving user from database", error);
    res.send(500).send("Error retrieving user from database");
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await userRepo.deleteUser(id);
    res.status(200).send("User has been successfully deleted");
  } catch (error) {
    console.error("Error deleting the user", error);
    res.status(500).send("Error deleting the user");
  }
};

exports.login = async (req, res) => {
  const body = req.body;
  try {
    const results = await userRepo.getUserByUserEmail(body.email);
    const [result] = results;
    const compare = compareSync(body.password, result.password);
    if (compare) {
      result.password = undefined;
      const jsontoken = sign({ result: result }, "qwe1234", {
        expiresIn: "1h",
      });
      return res.json({ message: "login successfully", token: jsontoken });
    } else {
      return res.json({ data: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Invalid email or password", error);
    res.status(401).send("401 : Invalid email or password");
  }
};
