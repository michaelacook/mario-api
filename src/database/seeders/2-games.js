'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Games", [
      {
        title: "Mario Bros.",
        year: 1983,
        platformId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Super Mario Bros.",
        year: 1985, 
        platformId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Super Mario Bros. 2",
        year: 1988, 
        platformId: 2, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Super Mario Bros. 3",
        year: 1990,
        platformId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Super Mario Bros./Duck Hunt/Track Meet",
        year: 1990,
        platformId: 2, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Dr. Mario",
        year: 1990,
        platformId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Mario is Missing!",
        year: 1993,
        platformId: 2, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Mario's Time Machine",
        year: 1994, 
        platformId: 3, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Super Mario 64",
        year: 1996, 
        platformId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Mario Kart 64",
        year: 1996,
        platformId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 
      {
        title: "Mario Party", 
        year: 1998,
        platformId: 4, 
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 
      {
        title: "Mario Party 2", 
        year: 1999,
        platformId: 4, 
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 
      {
        title: "Mario Party 3", 
        year: 2000, 
        platformId: 4, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Mario Tennis", 
        year: 2000, 
        platformId: 4, 
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 
      {
        title: "Mario Golf", 
        year: 1999, 
        platformId: 4, 
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 
      {
        title: "Paper Mario",
        year: 2000,
        platformId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, 
      {
        title: "Dr. Mario 64",
        year: 2001,
        platformId: 4, 
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Games", null, {})
  }
};
