const Sequelize = require("sequelize");
const db = require("../db");

class Favorite extends Sequelize.Model {}

Favorite.init(
  {
    favoriteId: {
      type: Sequelize.INTEGER,
    },
    favoriteTitle: {
      type: Sequelize.STRING,
    },
    poster_path: {
      type: Sequelize.STRING,
    }
  },
  { sequelize: db, modelName: "favorite" }
);

module.exports = Favorite;
