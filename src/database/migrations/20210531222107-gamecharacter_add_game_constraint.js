"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addConstraint("GameCharacters", {
      fields: ["gameId"],
      type: "foreign key",
      name: "gameId",
      references: {
        table: "Games",
        field: "id"
      },
      onUpdate: "cascade",
      onDelete: "cascade",
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint("GameCharacters", "gameId")
  }
}
