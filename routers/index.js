const express = require('express');
const {login } = require('../controllers/Login');
const app = express();
const {autenticacion , authAdmin, authVendedor, authcomprador} = require('../middlewares/Auth');
const  {create}  =require('../controllers/user')
const { createproducto, getAllproductos} =  require('../controllers/products')
const {open} = require("../controllers/pago");
const {email, emailRegistro} = require("../controllers/SendEmail");

app.use('/user', [autenticacion, authAdmin ], require('./user'));// ´primer filtro  filtro de token
//
//app.use('/user', require('./user'));
app.post('/login',login)

//registro usuario
app.post('/register',create); 

//ruta para enviar email
app.use('/correoregistro',emailRegistro);
app.use('/enviarcorreoIntentos', email);

//ruta para los productos 
app.use('/productos',[autenticacion,authVendedor],require('./products'));
app.get('/allProducts',[autenticacion ,authcomprador], getAllproductos)

//ruta para metodo de pago
app.use('/comprador',[autenticacion,authcomprador],open);

//rutas  para los archivos Logs solo el admin
app.use('/admin/logs', require('./Logs'));


module.exports = app;

//admin mirar archivos logs, todos los productos, todos los usuarios "crud", productos comprados iniciar sesion registro crud de usuarios
// comprador comprar productos,  registrarse iniciar sesion, listar productos comprados "carrito"
// vendedor agregar productos actualizar eliminar, 