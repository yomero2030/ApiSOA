const route = require('express').Router();

const { getAll, create, update, destroy, getId } = require('../controllers/user');



route.get('/', getAll);

route.get('/:id', getId);

route.post('/', create)


module.exports = route;