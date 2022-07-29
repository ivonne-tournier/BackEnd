const  {  default : axios  }  =  require ( "axios" ) ;
const { validationResult } = require("express-validator");
const res = require("express/lib/response");
const{Silla}=require('../model/Silla');


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
const verSilla= async (req,res) =>{
    const sillas = await Silla.find()
        res.json({sillas})
}

const verUnaSilla = async (req,res)=>{
    try{
        const silla = await Silla.findById(req.params.id);
        res.json({silla})
    }
    catch (err){
        res.status(400).json({msg: 'error con el id', err})
    }
}

const crearSilla = async (req,res)=>{
    try{
        const save = new Silla (req.body);
        await save.save()
        res.status(201).json(save)
    }
    catch (err){
        res.status(501).json({msg: 'no se puede guardar la silla porfavor intenta mas tarde', err})
    }
}
const actualizarSilla= async (req,res) =>{
    const error = validationResult(req)
    if (error.isEmpty()){
        const {id}=req.params
    const update= await Silla.findByIdAndUpdate(id, req.body)
    res.status(202).json({modelo: req.body.modelo, update})
    } else { 
        res.status(501).json(error)
    }

}
const borrarSilla= async (req,res)=>{
    try { 
        const silla= await Silla.findByIdAndDelete(req.params.id)
        res.json({msg: "se ha eliminado una silla", Silla})
    }catch (err){
        res.status(400).json({msg: "hay problemas al borrar la silla"})
    }
}

const verApiExterna = async(req,res)=>{
    const resultado = await axios.get("https://jsonplaceholder.typicode.com/users/",{timeout:1000}).catch((err)=>{
        err.origin = 'Error con la URL';
        throw err;
    });
    res.status(200).json(resultado.data)
}
module.exports={controller, index, verSilla, crearSilla, verUnaSilla, actualizarSilla, borrarSilla, verApiExterna }