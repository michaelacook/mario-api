"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addConstraint("Games", {
      fields: ["platformId"],
      type: "foreign key", 
      name: "platformId",
      references: {
        table: "Platforms",
        field: "id",
      },
      onUpdate: "cascade",
      onDelete: "cascade",
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint("Games", "platformId")
  }
}
