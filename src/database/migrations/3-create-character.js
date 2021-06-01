"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Characters", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true, 
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
      },
      year_released: {
        type: Sequelize.INTEGER,
      },
      debut_game: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Characters")
  }
}
