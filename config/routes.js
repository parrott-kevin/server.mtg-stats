'use strict';

var express = require('express');
var router = express.Router();

var cards = require('../controllers/cards');

router.get('/card/', cards.get.cardInfo);

module.exports = router;
