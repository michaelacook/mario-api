"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addConstraint("Characters", {
      fields: ["debut_game"],
      type: "foreign key", 
      name: "debut_game",
      references: {
        table: "Games",
        field: "id",
      },
      onUpdate: "cascade",
      onDelete: "cascade",
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint("Characters", "debut_game")
  }
}

