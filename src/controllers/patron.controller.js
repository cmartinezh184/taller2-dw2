const Persona = require('../models/Persona');
const Patron = require('../models/Patron');

exports.list = async (req, res) => {
    try {
        const patrones = await Patron.find();
        res.json(patrones);
    } catch (e) {
        res.send({
            message: "Error al cargar la lista de personas"
        })
    }
};

exports.create = (req, res) => {
    res.send({
        message: "To-do code"
    })
};

exports.delete = (req, res) => {
    res.send({
        message: "To-do code"
    })
};

exports.update = (req, res) => {
    res.send({
        message: "To-do code"
    })
};

exports.getOne = (req, res) => {
    res.send({
        message: "To-do code"
    })
};