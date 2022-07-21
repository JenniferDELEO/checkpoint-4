const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user");
const { checkToken } = require("../auth/tokenValidation");

router.post("/", userCtrl.createUser);
router.get("/", userCtrl.getAllUsers);
router.get("/:id", userCtrl.getOneUser);
router.delete("/:id", userCtrl.deleteUser);
router.post("/login", userCtrl.login);

module.exports = router;
