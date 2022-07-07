const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () =>{
    try{
        mongoose.connect(process.env.MONGO_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("base de datos conectada");
    } catch {
        console.log("error en inicio de base de datos")
    }
}
module.exports= {dbConnection}