"use strict"

const marioGames = []
for (let i = 1; i < 52; i++) {
  marioGames.push({
    gameId: i, 
    characterId: 1, 
    createdAt: new Date(),
    updatedAt: new Date(),
  })
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("GameCharacters", [
      ...marioGames,
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
