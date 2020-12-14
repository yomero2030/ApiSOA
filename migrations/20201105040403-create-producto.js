'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Productos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idUser : {
        type: Sequelize.INTEGER,
        references: { 
          model: 'users',
          key: 'id'
        }
      },
      nombre: {
        type: Sequelize.STRING
      },
      categoria: {
        type: Sequelize.STRING
      },
      precio: {
        type: Sequelize.STRING
      },
      imagen: {
        allowNull: false,
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Productos');
  }
};