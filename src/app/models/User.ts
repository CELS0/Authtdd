const  db  = require('../models/index')


class modelUser extends db {
  User = (sequelize, DataTypes) => {

    sequelize.define(
      "users",
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password_hash: DataTypes.STRING
      },
    );
    return this.User
  }
};



module.exports = {
  modelUser
};
