const express = require('express');
const router = express.Router();

var customer = require('../api/customer');
var product = require('../api/product');


router.use('/customer', customer);
router.use('/product', product);

module.exports = router;