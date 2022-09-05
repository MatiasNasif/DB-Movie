const express = require("express");
const Users = require("../models/Users");
const router = express.Router();
const passport = require("passport");


//muestra un usuario
router.get("/:id", (req, res) => {
  Users.findOne({
    where: { id: req.params.id },
  }).then((user) => res.send(user));
});

//registra un usuario
router.post("/register", (req, res) => {
  Users.create(req.body)
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((error) => res.status(500).send(error));
});

//loguea un usuario
router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user).status(200);
});

//desloguea un usuario
router.post("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) return next(err);
    res.sendStatus(200);
  });
});

//edita campos de un usuario
router.put("/:id", (req, res) => {
  Users.update(req.body,{
      where: { id: req.params.id },
      returning: true,
      plain: true
  })
  .then(user => res.status(201).send(user[1]))
  .catch((err) => res.send(err));
})

router.get("/me", (req, res) => {
  if (!req.user) return res.sendStatus(401);
  res.send(req.user);
});


router.use("/", (req, res) => {
  res.sendStatus(404);
});

module.exports = router;
