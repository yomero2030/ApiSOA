const route = require('express').Router();
const {update,  createproducto , getId, getAllproductos, destroy} = require('../controllers/products');

route.post('/',createproducto);

route.get('/',getAllproductos);

route.get('/:id',getId);

route.post('/:id',destroy);

route.put('/:id',update)


module.exports = route;