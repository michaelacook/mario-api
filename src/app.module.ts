import { Module } from "@nestjs/common"
import { SequelizeModule } from "@nestjs/sequelize"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { GameModule } from "./game/game.module"
import { PlatformModule } from "./platform/platform.module"
import { CharacterModule } from "./character/character.module"
import { GameCharacterModule } from "./game_character/game_character.module"

const dbconfig: object = {
  dialect: "sqlite",
  storage: "./dev",
  logging: false,
  autoLoadModels: true,
}

@Module({
  imports: [
    SequelizeModule.forRoot(dbconfig),
    GameModule,
    PlatformModule,
    CharacterModule,
    GameCharacterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
