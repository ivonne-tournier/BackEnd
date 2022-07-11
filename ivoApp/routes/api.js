const express = require('express');
const router = express.Router();
const{verRopa, crearSillas}= require('../controller/controller');

router.get('/ver', verRopa);
router.post('/crear', crearSillas);

module.exports= router;