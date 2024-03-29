const Sequelize = require("sequelize");
const db = require("../db");

const bcrypt = require("bcrypt");

class User extends Sequelize.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
}

User.init(
  {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    salt: {
      type: Sequelize.STRING,
    },
    admin: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    plan: {
      type: Sequelize.STRING,
      defaultValue: null,
    },
  },
  { sequelize: db, modelName: "user" }
);

User.beforeCreate((user) => {
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

module.exports = User;
