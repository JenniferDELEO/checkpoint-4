const express = require("express");
const router = express.Router();

const stuffCtrl = require("../controllers/stuff");

router.post("/", stuffCtrl.createThing);
router.get("/", stuffCtrl.getAllStuff);
router.patch("/:id", stuffCtrl.modifyThing);
router.delete("/:id", stuffCtrl.deleteThing);

module.exports = router;
