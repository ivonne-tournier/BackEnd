const mongoose = require('mongoose');
require('dotenv').config();

const dbConection = async () =>{
    try{
        await mongoose.conect(process.env.MONGO_CNN,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("base de datos conectada");
    } catch {
        console.log("error en inicio de base de datos")
    }
}
module.exports= {dbConection}