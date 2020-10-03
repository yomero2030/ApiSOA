const express = require('express');
const {login } = require('../controllers/Login');
const app = express();
const {autenticacion} = require('../controllers/middlewares/Auth');
const  {create}  =require('../controllers/user')

app.use('/user', [autenticacion], require('./user'));
app.use('/user', require('./user'));
app.post('/login',login)
app.post('/register',create);



module.exports = app;