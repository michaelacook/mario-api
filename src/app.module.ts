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

const env = process.env.NODE_ENV || "development"

const sqliteConfig: object = {
  dialect: "sqlite",
  storage: "./dev",
  logging: false,
  autoLoadModels: true,
}

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

const mySQLConfig: object = {
  dialect: "mysql",
  host: "127.0.0.1",
  port: "3306",
  username: "root",
  password: "",
  database: "mario-api",
  autoLoadModels: true,
}

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // SequelizeModule.forRoot(),
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

/*
https://github.com/onwuvic/nest-blog-api

https://docs.nestjs.com/recipes/sql-sequelize

https://www.freecodecamp.org/news/build-web-apis-with-nestjs-beginners-guide/
*/
