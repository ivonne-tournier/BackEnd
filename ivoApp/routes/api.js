const express = require('express');
const router = express.Router();
const {validarId}=require("../middleware/validacion");
const {check, validationResult, body}=require("express-validator");
const {verSilla,crearSilla, verUnaSilla, actualizarSilla, borrarSilla} = require('../controller/controller');

router.post('/crear',[
    check("modelo").not().isEmpty().withMessage("el campo esta vacio").isLength({max:20, min:0}).withMessage("maximo 20 caracteres"),
    check("marca").not().isEmpty().withMessage("el campo esta vacio").isLength({max:20, min:0}).withMessage("maximo 20 caracteres"),
    check("material").not().isEmpty().withMessage("el campo esta vacio").isLength({max:20, min:0}).withMessage("maximo 20 caracteres"),
    check("precio").not().isEmpty().withMessage("el campo esta vacio").isLength({max:20, min:0}).withMessage("maximo 20 caracteres"),
    check("color").not().isEmpty().withMessage("el campo esta vacio").isLength({max:20, min:0}).withMessage("maximo 20 caracteres"),
    check("tela").not().isEmpty().withMessage("el campo esta vacio").isLength({max:20, min:0}).withMessage("maximo 20 caracteres")
], crearSilla);

router.put ('/actualizar/',[
    check("modelo").not().isEmpty().withMessage("el campo esta vacio").isLength({max:20, min:0}).withMessage("maximo 20 caracteres")
], validarId, actualizarSilla);

router.get('/ver', verSilla);
router.get('/ver/:id', validarId, verUnaSilla);
router.delete('/borrar/:id', validarId, borrarSilla)

module.exports = router;