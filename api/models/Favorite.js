const Sequelize = require("sequelize");
const db = require("../db");

class Favorite extends Sequelize.Model {}

Favorite.init(
  {
    favoriteId: { //id de la pelicula de la api
      type: Sequelize.INTEGER,
    },
    original_title: { //titulo de la pelicula de la api
      type: Sequelize.STRING,
    },
    poster_path: {
      type: Sequelize.STRING, //imagen de la pelicula de la api
    },
  },
  { sequelize: db, modelName: "favorite" }
);

module.exports = Favorite;
