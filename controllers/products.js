const { Producto } = require('../models/index');

const createproducto = async(req, res) => {
    
    try {
        console.producto(req.body);
        let { nombre, categoria, precio, imagen } = req.body;

        let producto= await Producto.create({
            nombre ,
            categoria,
            precio ,
            imagen ,
        
        });

        if (!producto) {
            return res.status(400).json({
                ok: false,
                message: 'User is not created'
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
        let produc = await Producto.findAll();

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
        let produc = await Producto.findByPk(id);

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


 module.exports = {
    createproducto,
     getAllproductos,
     getId

 }