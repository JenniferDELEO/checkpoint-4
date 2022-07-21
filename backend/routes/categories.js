const express = require("express");
const router = express.Router();

const categoriesCtrl = require("../controllers/categories");

router.get("/", categoriesCtrl.getAllCategories);
router.get("/:id", categoriesCtrl.getOneCategorie);

module.exports = router;
