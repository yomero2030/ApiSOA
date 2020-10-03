const jwt = require('jsonwebtoken');
const bccrypt  =require('bcrypt');

const {User} = require ('../models/index');

const login = async(re, resp) =>{
  try {
    let{email , password} = re.body;

    let user  = await User.findOne({
        where: {
            email : email
        },
    });

    if(!user){
        return resp.status(400).json({
            ok : false,
                message : 'user no encontre'
        });
    }
    if(!(bccrypt.compareSync(password, user.password))){
        return resp.status(400).json({
            ok : false,
            message : 'password'
        });
    }

    let token = jwt.sign({user
    },'llave',{
                expiresIn:'1h'
            });

            return resp.json({
                ok : true,
                user,
                token
            });
  } catch (error) {
      return resp.status(500).json({
          ok : false,
          message : 'user not Found'
      });
  }

}

module.exports = {
    login
}