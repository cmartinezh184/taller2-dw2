const Persona = require('../models/Persona');
const Socio = require('../models/Socio');
const Patron = require('../models/Patron');
const Barco = require('../models/Barco');
const Salida = require('../models/Salida');

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

exports.create = async (req, res) => {
    const {
        dni,
        nombre,
        direccion,
        dniSocio,
        dniPatron
    } = req.body;

    try {
        let persona = await Persona.findOne({ dni });

        if (persona) {
            return res.status(400).json({
                message: "Persona ya existente"
            });
        }

        persona = new Persona({
            dni,
            nombre,
            direccion,
            dniSocio,
            dniPatron
        });

        await persona.save();

        res.status(200).json({
            message: "Persona agregado exitosamente"
        });
    } catch (e) {
        console.log(e.message);
        res.status(500).send("Error al agregar persona");
    }
};

exports.delete = async (req, res) => {
    try {
        let socio = await Socio.findOne({ dniPersona: req.body.dniPersona });
        if (socio) {
            let barcos = await Barco.find({ dniSocio: socio.dniSocio});
            if(barcos) {
                barcos.forEach(element => {
                    Barco.findByIdAndDelete(element.id)
                });
            }
            await Socio.findByIdAndDelete(socio.id);
        }

        let patron = await Patron.findOne({ dniPersona: req.body.dniPersona });
        console.log(patron);
        if (patron) {
            let salidas = Salida.find({ dniPatron: patron.dniPatron });
            if (salidas) {
                res.status(500).send({
                    message: "No puede eliminar este patron ya que tiene salidas registradas"
                })
            }
            await Patron.findByIdAndDelete(patron.id);
        }

        await Persona.findOneAndDelete({dni: req.body.dniPersona}, { new: true, useFindAndModify: false });
        res.send({
            message: "Persona eliminada correcetamente"
        })
    } catch (e) {
        res.send({
            message: "Error al eliminar a la persona"
        })
    }
};

exports.update = async (req, res) => {
    try {
        const persona = await Persona.findOneAndUpdate({ dni: req.params.dniPersona }, { $set: req.body });
        res.send({
            message: "Persona actualizada exitosamente"
        });
    } catch (e) {
        res.send({
            message: "Error al actualizar la persona"
        });
    }
};

exports.getOne = (req, res) => {
    res.send({
        message: "To-do code"
    })
};