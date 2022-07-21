const express = require("express");
const router = express.Router();

const stuffCtrl = require("../controllers/stuff");
const { checkToken } = require("../auth/tokenValidation");

router.post("/", checkToken, stuffCtrl.createThing);
router.get("/", stuffCtrl.getAllStuff);
router.get("/:id", stuffCtrl.getOneThing);
router.put("/:id", checkToken, stuffCtrl.modifyThing);
router.delete("/:id", checkToken, stuffCtrl.deleteThing);

module.exports = router;
