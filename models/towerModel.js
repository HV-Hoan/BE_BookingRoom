const { DataTypes } = require("sequelize");
const sequelize = require("../dbs/db");


const Tower = sequelize.define("tower", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    image: {
        type: DataTypes.STRING
    },
    floors: {
        type: DataTypes.INTEGER,
    },
    rooms: {
        type: DataTypes.INTEGER,
    }
}, {
    tableName: "tower",
    timestamps: false
});
module.exports = Tower;