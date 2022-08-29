const express = require("express");
const router = express.Router();

const userRouter = require("../Controllers/userController")
const favoriteRouter = require("../Controllers/favoriteController")

router.use("/users", userRouter);
router.use("/favorites", favoriteRouter);

module.exports = router;