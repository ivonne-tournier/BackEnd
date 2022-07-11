const{Ropa}=require('../model/Ropa');
const{Silla}=require('../model/Silla');
const{Mesa}=require('../model/Mesa');
const{Zapato}=require('../model/Zapato');

const index = (req, res) =>{
    res.render("index", {title: "express"});
}

const controller ={
    index(req, res){
        res.render("index", {title: "express"});
    },
    users (req, res){
        res.send('respond with a resource');
    }

}
const verRopa= async (req,res) =>{
    const Ropa = await Ropa.find()
        res.json({Ropa})
}

const crearSillas = async (req,res)=>{
    try{
        const save = new Silla (req.body);
        await save.save()
        res.status(201).json(save)
    }
    catch (err){
        res.status(501).json({msg: 'no se puede guardar la silla porfavor intenta mas tarde', err})
    }
}

module.exports={verRopa,crearSillas}