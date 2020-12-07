const route = require('express').Router();
const SendEmail = require('../controllers/SendEmail');
const{ emailRegistro} = require('../controllers/SendEmail');

route.post('/',emailRegistro);  //routa para enviar correo electronico


module.exports = route;