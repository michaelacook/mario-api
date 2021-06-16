import { Module } from "@nestjs/common"
import { DatabaseModule } from "../../core/database/database.module"
import { GameController } from "./game.controller"
import { GameService } from "./game.service"
import { GameCharacterModule } from "../game_character/game_character.module"
import { gameProviders } from "./game.providers"

@Module({
  imports: [DatabaseModule, GameCharacterModule],
  controllers: [GameController],
  providers: [GameService, ...gameProviders],
})
export class GameModule {}
