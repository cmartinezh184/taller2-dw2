const Persona = require('../models/Persona');
const Socio = require('../models/Socio');
const Patron = require('../models/Patron');

exports.list = async (req, res) => {
    try {
        const personas = await Persona.find();
        res.json(personas);
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