const {Silla}=require("../model/Silla")
const validarId = async (req,res,next) =>{
    const Silla =await Silla.findById(req.params.id)
    if (Silla !== null){
        next();
    } else {
        res.json({msg: "el id es invalido"})
    }
}

module.exports={validarId}