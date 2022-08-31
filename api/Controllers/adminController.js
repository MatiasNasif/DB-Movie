const express = require("express");
const Users = require("../models/Users");
const router = express.Router();
const passport = require("passport");


//muestra todos los usuarios
router.get("/users", (req, res) => {
  Users.findAll()
  //.then((users) => res.send(users));
  .then((users) => console.log("admin", users))
});

//promueve un usario a admin
router.put("/:id", (req, res) => {
    const { id } = req.params;
    Users.update({
        where: { id: req.params.id },
    })
})

//borra un usuario
router.delete("/:id", (req, res) => {
    Users.destroy({
      where: { id: req.params.id },
    })
      .then((res) => res.sendStatus(200))
      .catch((err) => res.send(err));
  });
  

module.exports = router;
