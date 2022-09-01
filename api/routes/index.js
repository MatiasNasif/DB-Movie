const express = require("express");
const router = express.Router();

const userRouter = require("../Controllers/userController")
const favoriteRouter = require("../Controllers/favoriteController")
const adminRouter = require("../Controllers/adminController")

router.use("/users", userRouter);
router.use("/favorites", favoriteRouter);
router.use("/admin", adminRouter)

module.exports = router;