const express = require('express');
const app = express();

const User = require('./models/userModel');
const Tower = require('./models/towerModel');
const Room = require('./models/roomModel');
const Contract = require('./models/contractModel');

require('dotenv').config();
app.use(express.json());




const indexRouter = require("./routers/index");
app.use('/api', indexRouter);

// 1 user có nhiều tower
User.hasMany(Tower, { foreignKey: "id_user" });
Tower.belongsTo(User, { foreignKey: "id_user" });

// 1 user có nhiều contract
User.hasMany(Contract, { foreignKey: "id_user" });
Contract.belongsTo(User, { foreignKey: "id_user" });

// 1 room có 1 contract
Room.hasOne(Contract, { foreignKey: "id_room" });
Contract.belongsTo(Room, { foreignKey: "id_room" });

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);
