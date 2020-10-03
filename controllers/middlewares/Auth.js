const jtw = require('jsonwebtoken');

const autenticacion = (req, res ,next) =>{
    let token = req.get('Authorization');

    jtw.verify(token, 'llave', (err, data)=>{

        if(err){
            return res.statu(400).json({
                ok: false ,
                    err
            });
        }

        req.user = data.user;
        next();
    });


}

module.exports = {
    autenticacion
}