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

exports.create = async (req, res) => {
    const {
        matricula,
        dniSocio,
        nombre,
        amarre,
        cuota
    } = req.body;

    try {
        let barco = await Barco.findOne({ matricula });

        if (barco) {
            return res.status(400).json({
                message: "Barco ya existente"
            });
        }

        barco = new Barco({
            matricula,
            dniSocio,
            nombre,
            amarre,
            cuota
        });

        await barco.save();

        res.status(200).json({
            message: "Barco agregado exitosamente"
        });
    } catch (e) {
        console.log(e.message);
        res.status(500).send("Error al agregar barco");
    }
};

exports.delete = async (req, res) => {
    try {
        await Barco.findOneAndDelete({ matricula: barco.matricula });
        res.send({
            message: "Barco eliminado exitosamente"
        });
    } catch (e) {
        res.send({
            message: "Error al eliminar el barco"
        });
    }
};

exports.update = async (req, res) => {
    try {
        await Barco.findOneAndUpdate({ matricula: req.body.matricula }, { $set: req.body }, { new: true, useFindAndModify: false });
        res.send({
            message: "Barco actualizado exitosamente"
        });
    } catch (e) {
        res.send({
            message: "Error al actualizar barco"
        });
    }
};

exports.getOne = async (req, res) => {
    try {
        const barco = await Barco.findOne({ matricula: req.body.matricula });
        res.json(barco);
    } catch (e) {
        res.send({
            message: "Barco no encontrado"
        });
    }
};