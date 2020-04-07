const mongoose = require('mongoose');

const uri = "mongodb+srv://tenox0403:140268.GM@cluster0-6jylq.mongodb.net/taller2?retryWrites=true&w=majority";

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