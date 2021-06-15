import { Module } from "@nestjs/common"
// import { SequelizeModule } from "@nestjs/sequelize"
import { DatabaseModule } from "../../database/database.module"
import { GameCharacter } from "./game_character.model"
import { GameCharacterService } from "./game_character.service"
import { gameCharacterProviders } from "./game_character.providers"

@Module({
  imports: [DatabaseModule],
  exports: [GameCharacterService],
  providers: [GameCharacterService, ...gameCharacterProviders],
})
export class GameCharacterModule {}
