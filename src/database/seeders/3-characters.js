"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Characters", [
      {
        name: "Mario",
        year_released: 1981,
        debut_game: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Luigi",
        year_released: 1983, 
        debut_game: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Characters", null, {})
  }
}
