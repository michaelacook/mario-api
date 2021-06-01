"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("GameCharacters", [
      {
        gameId: 1, 
        characterId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 2, 
        characterId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 3, 
        characterId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 4, 
        characterId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 5, 
        characterId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 6, 
        characterId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 7, 
        characterId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 8, 
        characterId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 9, 
        characterId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 10, 
        characterId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 11, 
        characterId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 12, 
        characterId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 13, 
        characterId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 14, 
        characterId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 15, 
        characterId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 16, 
        characterId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 17, 
        characterId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 18, 
        characterId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 19, 
        characterId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 20, 
        characterId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 21, 
        characterId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 22, 
        characterId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 23, 
        characterId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 24, 
        characterId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 25, 
        characterId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 26, 
        characterId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 27, 
        characterId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 28, 
        characterId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 29, 
        characterId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 30, 
        characterId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 31, 
        characterId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 32, 
        characterId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 33, 
        characterId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 34, 
        characterId: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        gameId: 1, 
        characterId: 2, 
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("GameCharacters", null, {})
  }
}
