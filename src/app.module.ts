import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { SequelizeModule } from "@nestjs/sequelize"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { GameModule } from "./lib/game/game.module"
import { PlatformModule } from "./lib/platform/platform.module"
import { CharacterModule } from "./lib/character/character.module"
import { GameCharacterModule } from "./lib/game_character/game_character.module"
import { UploaderModule } from "./lib/uploader/uploader.module"
import { config } from "./database/config"

const env = process.env.NODE_ENV || "development"

const dbconfig: object = {
  dialect: "sqlite",
  storage: "./dev",
  logging: false,
  autoLoadModels: true,
}

console.log("database url: ", process.env.DATABASE_URL)

const postGresConfig: object = {
  url: "postgres://iqkjgqapygxime:603ae8965bd12621b2fbb9a4f2d25e34b3a7adc76c5f3bc4288858a4d52886e0@ec2-3-212-75-25.compute-1.amazonaws.com:5432/d1rcd2nlivtm71",
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  autoLoadModels: true,
}

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot(postGresConfig),
    GameModule,
    PlatformModule,
    CharacterModule,
    GameCharacterModule,
    UploaderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
