import { Module } from "@nestjs/common"
import { DatabaseModule } from "../../core/database/database.module"
import { GameCharacterService } from "./game_character.service"
import { GAME_CHARACTER_SERVICE } from "./constants"
import { gameCharacterProviders } from "./game_character.providers"

@Module({
  imports: [DatabaseModule],
  exports: [GAME_CHARACTER_SERVICE],
  providers: [
    {
      provide: GAME_CHARACTER_SERVICE,
      useClass: GameCharacterService,
    },
    ...gameCharacterProviders,
  ],
})
export class GameCharacterModule {}
