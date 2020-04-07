const Salida = require('../models/Salida');
const Barco = require('../models/Barco');
const Patron = require('../models/Patron');

exports.list = async (req, res) => {
    try {
        const salidas = await Salida.find();
        res.json(salidas);
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