import { Sequelize } from "sequelize-typescript"
import { Character } from "../lib/character/models/character.model"
import { Game } from "../lib/game/models/game.model"
import { GameCharacter } from "../lib/game_character/game_character.model"
import { Platform } from "../lib/platform/models/platform.model"

const models = [Character, Game, GameCharacter, Platform]

const devConfig = {
  provide: "SEQUELIZE",
  useFactory: async () => {
    const sequelize = new Sequelize({
      dialect: "sqlite",
      storage: "./dev",
      logging: false,
    })
    sequelize.addModels(models)
    await sequelize.sync()
    return sequelize
  },
}

const prodConfig = {
  provide: "SEQUELIZE",
  useFactory: async () => {
    const sequelize = new Sequelize(process.env.DATABASE_URL, {
      dialect: "postgres",
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    })
    sequelize.addModels(models)
    await sequelize.sync()
    return sequelize
  },
}

export const databaseProviders = [
  process.env.NODE_ENV === "production" ? prodConfig : devConfig,
]
