const Barco = require('../models/Barco');
const Socio = require('../models/Socio');

exports.list = async (req, res) => {
    try {
        const barcos = await Barco.find();
        res.json(barcos);
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