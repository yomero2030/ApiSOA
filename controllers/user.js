const { User } = require('../models/index');
const bycrypt =  require("bcrypt");

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
        console.log(req.body);
        let { name, last_name, email, rol, password } = req.body;

        let user = await User.create({
            name ,
            last_name,
            email ,
            rol,
            password :  bycrypt.hashSync(password,10)
        
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
const destroy = async(req, res) => {
    try {
        let id =  req.params.id;
        let user = await User.destroy({
            where:{
                id : id
            }
        });
        if(!user){
            return res.status(400).json({
                ok :false,
                message: 'User wes not'
            });
        }
        return res.json({
            ok : true,
            user
        });

        
    } catch (error) {
        return res.status(500).json({
            ok: false,
                message: 'not defuond'
        });
    }

};


// Eliminar
const update = async(req, res) => {
    try {
        let id = req.params.id;
        let {name,last_name,email,password}= req.body;

        let body = {
            name,
            last_name,
            email,
            password
        }

        let user = await User.update(body, {
            where: {
                id:id
            },
        })
        if(!user){
            return res.status(400).json({
                ok : false,
                user
            });
        }
        return res.json({
            ok : true,
            user
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            err
        });
    
    }
};


module.exports = {
    getAll,
    getId,
    create,
    update,
    destroy
}