module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "users",
        {
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password_hash: DataTypes.STRING
        }
    );
    return User
};