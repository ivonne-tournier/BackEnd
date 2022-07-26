const express = require('express');
const router = express.Router();
const {validarId}=require("../middleware/validacion");
const {check, validationResult, body}=require("express-validator");
const {verSilla,crearSilla, verUnaSilla, actualizarSilla, borrarSilla} = require('../controller/controller');

router.post('/crear',[
    check("modelo").not().isEmpty().withMessage("el campo esta vacio").isLength({max:20, min:1}).withMessage("maximo 20 caracteres y minimo 1"),
    check("marca").not().isEmpty().withMessage("el campo esta vacio").isLength({max:20, min:1}).withMessage("maximo 20 caracteres y minimo 1"),
    check("material").not().isEmpty().withMessage("el campo esta vacio").isLength({max:20, min:1}).withMessage("maximo 20 caracteres y minimo 1"),
    check("precio").not().isEmpty().withMessage("el campo esta vacio").isLength({max:20, min:1}).withMessage("maximo 20 caracteres y minimo 1"),
    check("color").not().isEmpty().withMessage("el campo esta vacio").isLength({max:20, min:1}).withMessage("maximo 20 caracteres y minimo 1"),
    check("tela").not().isEmpty().withMessage("el campo esta vacio").isLength({max:20, min:1}).withMessage("maximo 20 caracteres y minimo 1")
], crearSilla);

router.put ('/actualizar/',[
    check("modelo").not().isEmpty().withMessage("el campo esta vacio").isLength({max:20, min:1}).withMessage("maximo 20 caracteres y minimo 1"),
    check("marca").not().isEmpty().withMessage("el campo esta vacio").isLength({max:20, min:1}).withMessage("maximo 20 caracteres y minimo 1"),
    check("material").not().isEmpty().withMessage("el campo esta vacio").isLength({max:20, min:1}).withMessage("maximo 20 caracteres y minimo 1"),
    check("precio").not().isEmpty().withMessage("el campo esta vacio").isLength({max:20, min:1}).withMessage("maximo 20 caracteres y minimo 1"),
    check("color").not().isEmpty().withMessage("el campo esta vacio").isLength({max:20, min:1}).withMessage("maximo 20 caracteres y minimo 1"),
    check("tela").not().isEmpty().withMessage("el campo esta vacio").isLength({max:20, min:1}).withMessage("maximo 20 caracteres y minimo 1")
], validarId, actualizarSilla);

router.get('/ver', verSilla);
router.get('/ver/:id', validarId, verUnaSilla);
router.delete('/borrar/:id', validarId, borrarSilla)

module.exports = router;