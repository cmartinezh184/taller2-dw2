const Persona = require('../models/Persona');
const Patron = require('../models/Patron');

exports.list = async (req, res) => {
    try {
        const patrones = await Persona.find({dniPatron: {$ne: ""}});
        res.json(patrones);
    } catch (e) {
        res.send({
            message: "Error al cargar la lista de patrones"
        })
    }
};

exports.create = async (req, res) => {
    const {
        dniPersona
    } = req.body;

    try {
        let patron = await Patron.findOne({ dniPersona: dniPersona });

        if (patron) {
            return res.status(400).json({
                message: "Patron ya existente"
            });
        }

        patron = new Patron({
            dniPatron: 'P' + dniPersona,
            dniPersona
        });

        await patron.save();
        await Persona.findOneAndUpdate({ dni: dniPersona }, { $set: { dniPatron: patron.dniPatron } })

        // update persona code

        res.status(200).json({
            message: "Patron agregado exitosamente"
        });
    } catch (e) {
        console.log(e.message);
        res.status(500).send("Error al agregar patron");
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