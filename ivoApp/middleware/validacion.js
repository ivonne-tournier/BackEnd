const {Silla}=require("../model/Silla")
const validarId = async (req,res,next) =>{
    const silla =await Silla.findById(req.params.id)
    if (silla !== null){
        req.Silla = silla;
        next();
    } else {
        res.json({msg: "el id es invalido"})
    }
}

module.exports={validarId}
