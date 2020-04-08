const mongoose = require('mongoose');

const uri = "mongodb+srv://usuario_1:.My1stmongodb@cluster0-tu1f4.azure.mongodb.net/taller2?retryWrites=true&w=majority";

const InitiateMongoServer = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Conectado a la DB del taller 2 de Cristhian Martinez");
    } catch (e) {
        console.log(e);
        throw (e);
    }
};

module.exports = InitiateMongoServer;