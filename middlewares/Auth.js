const jtw = require('jsonwebtoken');
const { response, request } = require('../routers');

const autenticacion = (req, res ,next) =>{
    let token = req.get('Authorization');

    jtw.verify(token, 'llave', (err, data)=>{

        if(err){
            return res.statu(400).json({
                ok: false ,
                    err
            });
        }

        req.user = data.user;   ///  es global  esta llamada  instacear
        //req.user = data.user.;
        next();
    });
}

const authAdmin = ( request, response , next) => {
    let user = request.user
    //console.log(user);
    if(user.rol === "admin"){
        next();
        return 
    }
    return response.status(400).json({
        ok: false,
        mensaje: "error no eres admin "
    })
}

const authVendedor = (request, response, next)=>{
     let  user = request.user
    console.log(user);
     if(user.rol === "vendedor"){
         next();
         return
     }
     return response.status(400).json({
         ok: false,
         mensaje: "sin permisos vendedor "
     })
}

const authcomprador = (request, response , next) =>{
    let user =  request.user
    if(user.rol === "comprador"){
        next();
        return
    }
    return response.status(400).json({
        ok: false,
        mensaje: "sin permisos de comprador"
    })
}





module.exports = {
    autenticacion,
    authAdmin,
    authVendedor,
    authcomprador
}