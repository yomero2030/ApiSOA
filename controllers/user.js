const { User } = require('../models/index');


// Metodos para el crud

// Listar
const getAll = async(req, res) => {
    try {
        let users = await User.findAll();

        if (users.length == 0) {
            return res.status(400).json({
                ok: true,
                message: {
                    message: 'NO users'
                }
            });
        }

        return res.json({
            ok: true,
            users
        });

    } catch (err) {
        return res.status(500).json({
            ok: false,
            err
        });
    }
};

// Obtener un registro
const getId = async(req, res) => {

    try {
        let id = req.params.id;
        let user = await User.findByPk(id);

        if (!user) {
            return res.status(400).json({
                ok: false,
                message: 'User was not find'
            });
        }

        return res.json({
            ok: true,
            user
        });

    } catch (err) {
        return res.status(500).json({
            ok: false,
            err
        });
    }
};


// Crear objeto
const create = async(req, res) => {
    try {
        // let { name, last_name, email, password } = req.body;

        let user = await User.create({
            name: 'test',
            last_name: 'test',
            email: 'test',
            password: 'test'
        });

        if (!user) {
            return res.status(400).json({
                ok: false,
                message: 'User is not created'
            });
        }

        return res.json({
            ok: true,
            user
        });

    } catch (err) {
        return res.status(500).json({
            ok: false,
            err
        });
    }
};


//Actualizar
const update = async(req, res) => {

};


// Eliminar
const destroy = async(req, res) => {

};


module.exports = {
    getAll,
    getId,
    create,
    update,
    destroy
}