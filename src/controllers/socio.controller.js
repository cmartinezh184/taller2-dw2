const Persona = require('../models/Persona');
const Socio = require('../models/Socio');

exports.list = async (req, res) => {
    try {
        const socios = await Persona.find({ dniSocio: { $ne: "" }});
        res.json(socios);
    } catch (e) {
        res.send({
            message: "Error al cargar la lista de personas"
        })
    }
};

exports.create = async (req, res) => {
    const {
        dniPersona
    } = req.body;

    try {
        let socio = await Socio.findOne({ dniPersona: dniPersona });

        if (socio) {
            return res.status(400).json({
                message: "Socio ya existente"
            });
        }

        socio = new Socio({
            dniSocio: 'S' + dniPersona,
            dniPersona
        });

        await socio.save();
        await Persona.findOneAndUpdate({ dni: dniPersona }, { $set: { dniSocio: socio.dniSocio } })

        // update persona code

        res.status(200).json({
            message: "Socio agregado exitosamente"
        });
    } catch (e) {
        console.log(e.message);
        res.status(500).send("Error al agregar socio");
    }
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