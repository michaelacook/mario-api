'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Platforms", [
      {
        name: "Color TV Game",
        year: 1979,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nintendo Entertainment System (NES)",
        year: 1985,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Super Nintendo Entertainment System (SNES)",
        year: 1991,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nintendo 64",
        year: 1996,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nintendo GameCube",
        year: 2001,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Panasonic Q (Japan)",
        year: 2006, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Wii",
        year: 2006,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Wii Family Edition",
        year: 2011,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Wii U",
        year: 2012,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Wii Mini",
        year: 2012,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "NES Classic Edition",
        year: 2016, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nintendo Switch",
        year: 2017,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Super Nintendo Entertainment System Classic Edition",
        year: 2017,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Game Boy",
        year: 1989,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Game Boy Pocket",
        year: 1996,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Game Boy Light",
        year: 1997,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Game Boy Color",
        year: 1998,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Game Boy Advance",
        year: 2001,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Game Boy Advance SP",
        year: 2003,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nintendo DS",
        year: 2004,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Game Boy Micro",
        year: 2005,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nintendo DS Lite",
        year: 2006,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nintendo DSi XL",
        year: 2009,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nintendo 3DS XL",
        year: 2012,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nintendo 2DS",
        year: 2013,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "New Nintendo 3DS XL",
        year: 2017,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nintendo Switch Lite",
        year: 2019,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "New Nintendo 2DS XL",
        year: 2017,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Game & Watch: Super Mario Bros.",
        year: 2020,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Platforms", null, {})
  }
};
