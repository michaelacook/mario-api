"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Characters", [
      {
        name: "Mario",
        year_released: 1981,
        debut_game: 1, 
        image_url: "https://mario-api.s3.us-east-2.amazonaws.com/mario.gif",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Luigi",
        year_released: 1983, 
        debut_game: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Princess Toadstool (Peach)",
        year_released: 1985,
        debut_game: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Goomba",
        year_released: 1985, 
        debut_game: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Toad",
        year_released: 1985,
        debut_game: 2, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bowser (King Koopa)",
        year_released: 1985, 
        debut_game: 2, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bullet Bill",
        year_released: 1985, 
        debut_game: 2, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Yoshi",
        year_released: 1991,
        debut_game: 34,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Characters", null, {})
  }
}
