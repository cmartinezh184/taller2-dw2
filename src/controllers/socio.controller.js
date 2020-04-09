const Persona = require('../models/Persona');
const Socio = require('../models/Socio');

exports.list = async (req, res) => {
    try {
        const socios = await Persona.find({ dniSocio: { $ne: "" } });
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

        res.status(200).json({
            message: "Socio agregado exitosamente"
        });
    } catch (e) {
        console.log(e.message);
        res.status(500).send("Error al agregar socio");
    }
};

exports.delete = async (req, res) => {
    try {
        let socio = await Socio.findOne({ dniPersona: req.body.dniPersona });
        if (socio) {
            let barcos = await Barco.find({ dniSocio: socio.dniSocio });
            if (barcos) {
                barcos.forEach(element => {
                    let salidas = Salida.findOneAndDelete({ matricula: element.matricula });
                    salidas.forEach(element => {
                        Salida.findByIdAndDelete(element.id);
                    })
                    Barco.findByIdAndDelete(element.id);
                });
            }
            await Socio.findByIdAndDelete(socio.id);
            res.send({
                message: "Socio eliminado correcetamente"
            })
        }
    } catch (e) {
        res.send({
            message: "Error al eliminar socio"
        })
    }
};

exports.getOne = async (req, res) => {
    try {
        const socio = await Persona.find({ dniSocio: req.body.dniSocio });
        res.json(socio);
    } catch (e) {
        res.send({
            message: "Error al cargar socio"
        })
    }
};