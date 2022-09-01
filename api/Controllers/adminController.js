const express = require("express");
const Users = require("../models/Users");
const router = express.Router();

//muestra todos los usuarios
router.get("/users", (req, res) => {
  Users.findAll()
  .then((users) => res.send(users));
});

//promueve un usario a admin
router.put("/:id", (req, res) => {
    Users.update({admin: true},{
        where: { id: req.params.id },
        returning: true,
        plain: true
    })
    .then(user => res.status(201).send(user[1]))
    .catch((err) => res.send(err));
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
