"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addConstraint("GameCharacters", {
      fields: ["characterId"],
      type: "foreign key",
      name: "characterId",
      references: {
        table: "Characters",
        field: "id"
      },
      onUpdate: "cascade",
      onDelete: "cascade",
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint("GameCharacters", "characterId")
  }
}
