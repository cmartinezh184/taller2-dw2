const Salida = require('../models/Salida');
const Barco = require('../models/Barco');
const Patron = require('../models/Patron');

exports.list = async (req, res) => {
    try {
        const salidas = await Salida.find();
        res.json(salidas);
    } catch (e) {
        res.send({
            message: "Error al cargar la lista de salidas"
        })
    }
};

exports.create = async (req, res) => {
    const {
        matricula,
        fecha,
        destino,
        dniPatron
    } = req.body;

    try {
        
        let salida = new Salida({
            idSalida: 'SS' + matricula,
            matricula,
            fecha,
            destino,
            dniPatron
        });

        await salida.save();

        res.status(200).json({
            message: "Salida agregada exitosamente"
        });

    } catch (e) {
        console.log(e.message);
        res.status(500).send("Error al registrar salida");
    }
};

exports.delete = async (req, res) => {
    try {
        await Salida.findOneAndDelete({ idSalida: req.body.idSalida })
        res.send({
            message: "Salida eliminada correctamente"
        });
    } catch (e) {
        res.send({
            message: "Error al eliminar la salida"
        })
    }
};

exports.update = async (req, res) => {
    try {
        await Salida.findOneAndUpdate({ idSalida: req.body.idSalida }, { $set: req.body }, { new: true, useFindAndModify: false });
        res.send({
            message: "Salida actualizado exitosamente"
        });
    } catch (e) {
        res.send({
            message: "Error al actualizar salida"
        });
    }
};

exports.getOne = async (req, res) => {
    try {
        const salida = await Salida.findOne({ idSalida: req.body.idSalida });
        res.json(salida);
    } catch (e) {
        res.send({
            message: "Salida no encontrado"
        });
    }
};