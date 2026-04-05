const { DataTypes } = require("sequelize");
const sequelize = require("../dbs/db");


const Contract = sequelize.define("contract", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    id_room: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references: {
            model: 'room',
            key: 'id'
        }
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    endDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    totalPrice: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM("active", "expired"),
        defaultValue: "active",
        allowNull: false
    }
}, {
    tableName: "contract",
    timestamps: false
});
module.exports = Contract;