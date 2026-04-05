const express = require('express');
const router = express.Router();
const Contract = require("../models/contractModel");


exports.getAllContracts = async (req, res) => {
    try {
        const contracts = await Contract.findAll();
        res.json(contracts);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getContractById = async (req, res) => {
    try {
        const contract = await Contract.findByPk(req.params.id);
        if (!contract) {
            return res.status(404).json({ message: "Contract not found" });
        }
        res.json(contract);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

exports.createContract = async (req, res) => {
    try {
        const contract = await Contract.create(req.body);
        res.status(201).json(contract);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateContract = async (req, res) => {
    try {
        const contract = await Contract.findByPk(req.params.id);
        if (!contract) {
            return res.status(404).json({ message: "Contract not found" });
        }
        await contract.update(req.body);
        res.json(contract);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteContract = async (req, res) => {
    try {
        const contract = await Contract.findByPk(req.params.id);
        if (!contract) {
            return res.status(404).json({ message: "Contract not found" });
        }
        await contract.destroy();
        res.json({ message: "Contract deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
