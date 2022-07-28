const express = require('express');
const router = express.Router();
const {verApiExterna} = require('../controller/controller');

router.get('/verApi', verApiExterna);

module.exports = router;