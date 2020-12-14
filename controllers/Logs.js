const { Logs}   = require('../models/index');


const getAll = async ( request , response)=>{
    console.log(request.body)   
    try {
        let log = await Logs.findAll();

        if(log.length == 0){
            return response.json({
                ok: true,
                message: {
                    message: 'sin datos '
                }
            });

        }
        return response.json({
            ok: true,
            log
        });


    } catch (error) {
        return response.status(500).json({
            ok: false,
            error
        });
    }

};

const createnewlogs =  async( request, response) => {
        try {
            console.log(request.body);
            let {userId, rols, userName, formaInicio, status, actividad }= request.body;
            console.log('ho');
            let lo= await Logs.create({
                userId,
                rols, 
                userName, 
                formaInicio, 
                status,
                actividad,

            }
            );
            console.log('hola');
            if(!lo){
                return response.status(400).json({
                    ok: false,
                    message: 'el Log no ha sido creado'
                });
    
            }

            return response.json({
                ok: true,
                lo
                
            });
        } catch (error) {
            console.log('hola4')
            return response.status(500).json({
                ok: false,
                error: 'no conectado'
            });
        }

 };


const getById =  async(request, response) => {
    try {
        let id = request.params.id;
        let logid = await Logs.findByPk(id);

        if(!logid){
            return response.status(200).json({
                ok: false,
                message: ' Logs no encontrado'
            });
        }
        
        return response.json({
            ok: true, 
            logid
        });


    } catch (error) {
        return response.status(500).json({
            ok: false,
            error
        });
    }

};


module.exports = {
    getAll,
    getById,
    createnewlogs
}