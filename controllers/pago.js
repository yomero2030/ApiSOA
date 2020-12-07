
var Openpay = require('openpay');
var openpay = new Openpay('mk2ej5am4e3osuixy6hz', 'sk_395b4dfe3a01412597011b414999a411');
openpay.setProductionReady(false);

const open = async (request , response) => {
    try {

        let{ descripcionproducto , name , last_name, email, amount} = request.body;

        const fecha = new Date();
        
        var chargeRequest = {
            'method' : 'card',
            'amount' : amount,
            'description' : descripcionproducto,
            'order_id' : fecha.getHours()+fecha.getMinutes()+fecha.getSeconds(),
            'customer' : {
                 'name' : name,
                 'last_name' : last_name,
                 'phone_number' : '4423456723',
                 'email' : email
            },
           'send_email' : true,
           'confirm' : false,
           'redirect_url' : 'http://www.openpay.mx/index.html'
         }

         openpay.charges.create(chargeRequest, function(error, charge) {
            if(charge){
                console.log(charge)
            }else{
                console.log(error)
            }
          });

 
        return response.json({
            ok: true
        });

    } catch (error) {
        console.log(error)
        return response.status(500).json({
            ok: false,
            error
        });
    }

}

module.exports = {
    open
}