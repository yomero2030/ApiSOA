const route = require('express').Router();
const { createproducto , getId, getAllproductos} = require('../controllers/products');

route.post('/',createproducto);

route.get('/',getAllproductos);

route.get('/:id',getId);


module.exports = route;