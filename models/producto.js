'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Producto.belongsTo(models.User, {
        as: 'usuario',
        foreignKey: 'idUser',             ///llave foranea  solo en productos
        sourceKey: 'id'  
      });
    }
  };
  Producto.init({
    nombre: DataTypes.STRING,
    categoria: DataTypes.STRING,
    precio: DataTypes.NUMBER,
    imagen: DataTypes.STRING,
    idUser: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Producto',
  });
  return Producto;
};

//id user