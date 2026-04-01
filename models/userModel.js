const { DataTypes } = require("sequelize");
const sequelize = require("../dbs/db");

const User = sequelize.define("user", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fullname: {
        type: DataTypes.STRING
    },
    phonenumber: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.ENUM("admin", "owner", "user"),
        defaultValue: "user",
    }
}, {
    tableName: "user",
    timestamps: false
});

module.exports = User;