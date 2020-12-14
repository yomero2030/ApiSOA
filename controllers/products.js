const { Producto } = require('../models/index');

const createproducto = async(req, res) => {
    try {
        console.log(req.body);
        let { nombre, idUser, categoria, precio, imagen, descripcion } = req.body;

        let producto= await Producto.create({
            idUser,
            nombre ,
            categoria,
            precio ,
            imagen ,
            descripcion,
        
        });

        if (!producto) {
            return res.status(400).json({
                ok: false,
                message: 'Producto no creado'
            });
        }

        return res.json({
            ok: true,
            producto
        });

    } catch (err) {
        return res.status(500).json({
            ok: false,
            err
        });
        
    }
};

// Listar
const getAllproductos = async(req, res) => {
    try {
        let produc = await Producto.findAll({
            include: {
                association: 'usuario'
            }
        });

        if (produc.length == 0) {
            return res.status(400).json({
                ok: true,
                message: {
                    message: 'no hay productos'
                }
            });
        }

        return res.json({
            ok: true,
            produc
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
        let produc = await Producto.findByPk(id,{
            include: {
                association: 'productos'
            }
        });

        if (!user) {
            return res.status(400).json({
                ok: false,
                message: 'User was not find'
            });
        }

        return res.json({
            ok: true,
            produc
        });

    } catch (err) {
        return res.status(500).json({
            ok: false,
            err
        });
    }
};



//ELIMINAR PRODUCTO
const destroy = async(req, res) => {
    try {
        let id =  req.params.id;
        let producto = await  Producto.destroy({
            where:{
                id : id
            }
        });
        if(!producto){
            return res.status(400).json({
                ok :false,
                message: 'no se encontro producto'
            });
        }
        return res.json({
            ok : true,
            producto
        });

        
    } catch (error) {
        return res.status(500).json({
            ok: false,
                message: 'not defuond'
        });
    }

};
//UPDATE PRODUCTO 
const update = async(req, res) => {
    try {
        let id = req.params.id;
        //let {name,last_name,email,password}= req.body;
        let { nombre, idUser, categoria, precio, imagen, descripcion } = req.body;

        let body = {
            nombre,
            idUser,
            categoria,
            precio,
            imagen,
            descripcion,
        }

        let producto = await Producto.update(body, {
            where: {
                id:id
            },
        })
        if(!producto){
            return res.status(400).json({
                ok : false,
                producto
            });
        }
        return res.json({
            ok : true,
            producto
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            err
        });
    
    }
};





 module.exports = {
    createproducto,
     getAllproductos,
     getId,
     destroy,
     update,

 }