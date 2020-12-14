'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            User.hasMany(models.Producto, {
                as: 'productos',
                foreignKey: 'idUser',             ///llave foranea  solo en productos
                sourceKey: 'id'                    //relacion con el atributo del modelo user 
            });
        }
    };
    User.init({
        name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        rol: DataTypes.STRING, // 1 admin //vendedor comprador 
        password: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'User',
        tableName: 'users'
    });
    return User;
};