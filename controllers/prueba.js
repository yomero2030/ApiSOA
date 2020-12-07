const createLog = async (request, response) => {
    try {
        let { id_usuario, name_usuario, status, metodo_inicio, hora_fecha, roll} = request.body;

        let log = await Log.create({
            id_usuario,
            name_usuario,
            status,
            metodo_inicio,
            hora_fecha,
            roll
        });

        if (!log) {
            return response.status(200).json({
                ok: false,
                message: 'El log no ha sido creado'
            });
        }

        if(roll == "2"){
            roll = "Administrador"
        }else{
            roll = "Usuario"
        }

        fs.stat("./logs/lauch_backup_user_" + id_usuario, function (err) {
            if (err == null) {

                fs.appendFile("./logs/lauch_backup_user_"+ id_usuario, 
                "-----------------------------------------\n"+
                "Id_usuario: " + id_usuario + "\n" +
                "Email: " + name_usuario + "\n" +
                "Status: " + status + "\n" + 
                "Metodo_inicio: " + metodo_inicio + "\n" +
                hora_fecha + "\n" +
                "Tipo de usuario: " + roll + "\n" +
                "-----------------------------------------\n", (err) => {
                    if (err) throw err;
                    console.log('Información agregada al archivo.!');
                  });
            } else if (err.code == 'ENOENT') {
                console.log("el archivo no existe");
                fs.writeFile( "./logs/lauch_backup_user_"+ id_usuario, 
                    "-----------------------------------------\n"+
                    "Id_usuario: " + id_usuario + "\n" +
                    "Email: " + name_usuario + "\n" +
                    "Status: " + status + "\n" + 
                    "Metodo_inicio: " + metodo_inicio + "\n" +
                    hora_fecha + "\n" +
                    "Tipo de usuario: " + roll + "\n" +
                    "-----------------------------------------\n",
                    function(err) {
                    if (err) {
                      return console.log(err);
                    }
                    console.log("El archivo fue creado correctamente");
                  });
            } else {
                console.log(err); 
            }
        })

        return response.json({
            ok: true,
            log
        });

    } catch (err) {
        return response.status(500).json({
            ok: false,
            err
        });

    }
}