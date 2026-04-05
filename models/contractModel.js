const { DataTypes } = require("sequelize");
const sequelize = require("../dbs/db");


const Contract = sequelize.define("contract", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    roomId: {
        type: DataTypes.INTEGER,
        allowNull: false
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