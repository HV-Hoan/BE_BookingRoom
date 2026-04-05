const { DataTypes } = require("sequelize");
const sequelize = require("../dbs/db");

const Room = sequelize.define("room", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_tower: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'tower',
            key: 'id'
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    floor: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM("lock", "unlock"),
        defaultValue: "unlock",
        allowNull: false
    },
    image: {
        type: DataTypes.STRING
    }
}
    , {
        tableName: "room",
        timestamps: false
    });

module.exports = Room;