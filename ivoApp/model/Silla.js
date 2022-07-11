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
    material: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    tela: {
        type: String,
        required: true,
    }
});
const Silla= mongoose.model('Silla',storeSchema);

module.exports={Silla}