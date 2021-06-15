import { Module } from "@nestjs/common"
// import { SequelizeModule } from "@nestjs/sequelize"
import { DatabaseModule } from "../../database/database.module"
// import { Game } from "./models/game.model"
import { GameController } from "./controllers/game.controller"
import { GameService } from "./providers/game.service"
import { GameCharacterModule } from "../game_character/game_character.module"
import { gameProviders } from "./game.providers"

@Module({
  imports: [DatabaseModule, GameCharacterModule],
  // exports: [SequelizeModule],
  controllers: [GameController],
  providers: [
    GameService,
    ...gameProviders,
  ],
})
export class GameModule {}
