"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Characters", [
      {
        name: "Mario",
        year_released: 1981,
        debut_game: 1, 
        image_url: "https://mario-api.s3.amazonaws.com/mario.gif",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Luigi",
        year_released: 1983, 
        debut_game: 1, 
        image_url: "https://mario-api.s3.amazonaws.com/luigi.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Princess Toadstool (Peach)",
        year_released: 1985,
        debut_game: 2,
        image_url: "https://mario-api.s3.amazonaws.com/princesstoadstool.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Goomba",
        year_released: 1985, 
        debut_game: 2,
        image_url: "https://mario-api.s3.amazonaws.com/goomba.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Toad",
        year_released: 1985,
        debut_game: 2, 
        image_url: "https://mario-api.s3.us-east-2.amazonaws.com/toad.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bowser (King Koopa)",
        year_released: 1985, 
        debut_game: 2, 
        image_url: "https://mario-api.s3.us-east-2.amazonaws.com/bowser.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bullet Bill",
        year_released: 1985, 
        debut_game: 2, 
        image_url: "https://mario-api.s3.us-east-2.amazonaws.com/bulletbill.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Yoshi",
        year_released: 1991,
        debut_game: 34,
        image_url: "https://mario-api.s3.us-east-2.amazonaws.com/yoshi.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Birdo",
        year_released: "1988",
        debut_game: 3, 
        image_url: "https://mario-api.s3.amazonaws.com/birdo.png",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Characters", null, {})
  }
}
