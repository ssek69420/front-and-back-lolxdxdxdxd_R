const router = require("express").Router();
const userController = require("../controllers/userController");

router.post("/inscribe", userController.inscribe);

router.post("/login", userController.login);

module.exports = router;