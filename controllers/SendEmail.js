const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
const email = async (request, response) => {
    try {

        let { email } = request.body;
        console.log(email)

        let testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: '171117@ids.upchiapas.edu.mx', // generated ethereal user
                pass: '171117interamericana', // generated ethereal password
            },
        });

        // send mail with defined transport object

        var info = await transporter.sendMail({
            from: "fabi131415@hotmail.com ",
            to: email,
            subject: "Hamacas.com. Inicio de sesión detectado.",
            html: `
        <h1>Hola ${email} !</h1>
        <p>
        Estás recibiendo este correo electrónico en la cuenta ${email} porque estás 
        suscrito a hamacas.com. </p>
        <p> Inicio de sesion Detectado <p>
        <p>
        Para dejar de recibir estos correos electrónico comunicate con un administrador para 
        cambiar la configuración de notificaciones. </p>
        <p>No responder a este correo electronico.</p>
    `
        })

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

        return response.json({
            ok: true
        });


    } catch (error) {
        return response.status(500).json({
            ok: false,
            error
        });
    }
}

const emailRegistro = async (request, response) => {
    try {

        let { email } = request.body;
        console.log(email)

        let testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: '1711178@ids.upchiapas.edu.mx', // generated ethereal user
                pass: '171117interamericana', // generated ethereal password
            },
        });

        // send mail with defined transport object

        var info = await transporter.sendMail({
            from: "fabi131415@hotmail.com",
            to: email,
            subject: "AEROLINE. Registro Exitoso.",
            html: `
        <h1>Hola ${email} !</h1>
        <p>\nBienvenido a nuestra comunidad.\n 
        Ahora ya estás listo  para disfrutar de la experiencia. \n
        Vísita nuestra pagina (<a href:"http://localhost:4200/home">Hamacas.com y obten los beneficios
        que tenemos para ti 
        </p>
        <p>
        Estás recibiendo este correo electrónico en la cuenta ${email} porque estás 
        suscrito a Hamacas.com . </p>
        <p>Reenviar esta invitación podría permitir a cualquier destinatario enviar una respuesta 
        y realizar modificaciones a la cuenta. Areoline no se hace responsable en caso del reenvio de este email.
        </p>
        <p>
        Para dejar de recibir estos correos electrónico comunicate con un administrador para 
        cambiar la configuración de notificaciones. </p>
        <p>No responder a este correo electronico.</p>
    `
        })

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

        return response.json({
            ok: true
        });


    } catch (error) {
        return response.status(500).json({
            ok: false,
            error
        });
    }
}




module.exports = {
    email,
    emailRegistro
}