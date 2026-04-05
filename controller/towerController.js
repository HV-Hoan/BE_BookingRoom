const express = require('express');
const router = express.Router();
const Tower = require("../models/towerModel");

exports.getAllTowers = async (req, res) => {
    try {
        const towers = await Tower.findAll();
        res.json(towers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getTowerById = async (req, res) => {
    try {
        const tower = await Tower.findByPk(req.params.id);
        if (!tower) {
            return res.status(404).json({ message: "Tower not found" });
        }
        res.json(tower);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createTower = async (req, res) => {
    try {
        const tower = await Tower.create(req.body);
        res.status(201).json(tower);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateTower = async (req, res) => {
    try {
        const tower = await Tower.findByPk(req.params.id);
        if (!tower) {
            return res.status(404).json({ message: "Tower not found" });
        }
        await tower.update(req.body);
        res.json(tower);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteTower = async (req, res) => {
    try {
        const tower = await Tower.findByPk(req.params.id);
        if (!tower) {
            return res.status(404).json({ message: "Tower not found" });
        }
        await tower.destroy();
        res.json({ message: "Tower deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
