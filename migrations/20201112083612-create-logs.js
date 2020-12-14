'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Logs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.STRING
      },
      rols: {
        type: Sequelize.STRING
      },
      userName: {
        type: Sequelize.STRING
      },
      formaInicio: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      actividad: {
        type: Sequelize.STRING
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Logs');
  }
};