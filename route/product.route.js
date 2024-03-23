

// product.route.js

const express = require('express');
const router = express.Router();
const Product = require('../model/product.model');
const { getProducts, getProduct, createProduct, updatedProduct, deleteProduct } = require('../controller/product.controller')

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', createProduct);
router.put('/:id', updatedProduct);
router.delete('/:id', deleteProduct)

module.exports = router;
