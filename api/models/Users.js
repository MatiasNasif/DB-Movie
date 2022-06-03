const Sequelize = require("sequelize");
const db = require("../db")

const bcrypt = require("bcrypt")


class Users extends Sequelize.Model {
    hash(password, salt) {
        return bcrypt.hash(password, salt);
    }
};

Users.init(
  {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
          isEmail:true
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    salt: {
        type: Sequelize.STRING

    }

  },
  {sequelize: db, modelName: "users"}
);


Users.beforeCreate((user) => {
    return bcrypt
      .genSalt(16)
      .then((salt) => {
        user.salt = salt;
        return user.hash(user.password, salt);
      })
      .then((hash) => {
        user.password = hash;
      });
});



module.exports = Users;