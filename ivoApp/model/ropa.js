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
    color: {
        type: String,
        required: true,
    }
});
const Ropa= mongoose.model('Ropa',storeSchema);

module.exports={Ropa}