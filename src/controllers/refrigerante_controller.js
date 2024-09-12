const Refri = require("../models/refrigerante_model.js");

const store = async (req,res) => {
    try {
        await Refri.create(req.body);
        res.json();
    } catch (error) {
        res.status(400).json(error);
    }
}

const index = async (req, res) => {
    try {
        const content = await Refri.find().exec();
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
}

const show = async (req,res) => {
    try {
        const content = await Refri.findById(req.params.id).exec();
        res.json(content); 
    } catch (error) {
        res.status(400).json(error);
    }
}

const update = async (req, res) => {
    try {
        await Refri.findByIdAndUpdate(req.params.id, req.body).exec();
        res.json();    
    } catch (error) {
        res.status(400).json(error);
    }
}

const destroy = async (req, res) => {
    try {
        await Refri.findByIdAndDelete(req.params.id).exec();
        res.json();
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    store,
    index,
    show,
    update,
    destroy
}