const express = require('express');
const app = express();

const {login } = require('../controllers/Login');

const {autenticacion , authAdmin, authVendedor, authcomprador} = require('../middlewares/Auth');

const  {create, getAll, getId }  =require('../controllers/user')

const { destroy} =  require('../controllers/products')

const {open} = require("../controllers/pago");

const {email, emailRegistro} = require("../controllers/SendEmail");


// ACA COMIENZAN LA RUTAS DE SERVER 

app.use('/user', [autenticacion, authAdmin ], require('./user'));// ´primer filtro  filtro de token
//
//app.use('/user', require('./user'));
app.post('/login',login)

//REGISTRO USER
app.post('/register',create); 

// TRAER TODOS LOS USUARIOS
app.get('/admin/allUser',getAll);
app.get('/users/allByid/:id',getId)

//RUTA PARA ENVIAR CORREO
app.use('/correoregistro',emailRegistro);
app.use('/enviarcorreoIntentos', email);

//RUTA DE PRODUCTOS CON SEGURIDAD 
//app.use('/productos',[autenticacion,authVendedor],require('./products'));
//app.get('/allProducts',[autenticacion ,authcomprador], getAllproductos)

//TRAER TODOS LOS PRODUCTOS 
app.use('/productos/create', require('./products'));  //this update
app.delete('/delete/product/:id',destroy);

//RUTA DE PRODUCTOS "ADMIN SOLO PODRA MIRAR LOS PRODUCTOS"
app.use('/admin/productos/all',require('./products'));

//RUTA DE PRODUCTOS "VENDEDOR LOS PRODUCTOS QUE SON PROPIOS DE EL  
        //CREARA PRODUCTOS ACTUALIZARA Y ELIMINAR ACTUlZAR"


//RUTA DE PRODUTOS "COMPRADOR SOLO PODRA VER LOS PRODUCTOS"


//RUTA PARA METODO DE PAGO
app.use('/comprador',[autenticacion,authcomprador],open);

// RUTA DE ARCHIVOS LOGS  ALL METHODS 
app.use('/admin/logs',require('./Logs'));




module.exports = app;

//admin mirar archivos logs, todos los productos, todos los usuarios "crud", productos comprados iniciar sesion registro crud de usuarios
// comprador comprar productos,  registrarse iniciar sesion, listar productos comprados "carrito"
// vendedor agregar productos actualizar eliminar, 