const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const storeSchema = new Schema({
    modelo: {
        type: String,
        required: true,
    },
    marca: {
        type: String,
        required: true,
    },
    temporada: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    altura: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        required: true,
    }
});
const Zapato= mongoose.model('Zapato',storeSchema);

module.exports={Zapato}