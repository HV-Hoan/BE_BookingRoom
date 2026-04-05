const { Sequelize } = require("sequelize");
require('dotenv').config();


const USER = process.env.user_db;
const USER_PASSWORD = process.env.user_db_password;
const DATABASE_NAME = process.env.database_name;


const sequelize = new Sequelize({
    host: 'localhost',
    dialect: "mysql",
    username: USER,
    password: USER_PASSWORD,
    database: DATABASE_NAME,
    logging: false
});


sequelize.authenticate()
    .then(() => {
        console.log('Kết nối Sequelize thành công');
    })
    .catch(err => {
        console.error('Lỗi kết nối Sequelize:', err);
    });


module.exports = sequelize;