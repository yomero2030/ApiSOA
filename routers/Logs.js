const route = require('express').Router();

const {createnewlogs,getAll,getById } = require('../controllers/Logs');


route.post('/', createnewlogs)
route.get('/', getAll)
route.get('/',getById)

module.exports =  route;