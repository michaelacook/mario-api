import { Module } from "@nestjs/common"
import { SequelizeModule } from "@nestjs/sequelize"
import { GameCharacter } from "./game_character.model"
import { GameCharacterService } from "./game_character.service"

@Module({
  imports: [SequelizeModule.forFeature([GameCharacter])],
  exports: [SequelizeModule, GameCharacterService],
  providers: [GameCharacterService],
})
export class GameCharacterModule {}
