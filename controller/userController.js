var express = require('express');
var router = express.Router();
const User = require("../models/userModel");



exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        return res.json(users);
    } catch (error) {
        return res.status(500).json({ error: 'Lỗi khi lấy danh sách người dùng' });
    }
};
exports.getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: 'Người dùng không tồn tại' });
        }
        return res.json(user);
    } catch (error) {
        return res.status(500).json({ error: 'Lỗi khi lấy thông tin người dùng' });
    }
};

exports.createUser = async (req, res) => {
    try {
        const { username, password, fullname, phonenumber, role } = req.body;
        const newUser = await User.create({ username, password, fullname, phonenumber });
        return res.status(201).json(newUser);
    } catch (error) {
        return res.status(500).json({ error: 'Lỗi khi tạo người dùng' });
    }
};  
