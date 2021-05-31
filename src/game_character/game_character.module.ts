import { Module } from "@nestjs/common"
import { SequelizeModule } from "@nestjs/sequelize"
import { GameCharacter } from "./game_character.model"

@Module({
  imports: [SequelizeModule.forFeature([GameCharacter])],
  exports: [SequelizeModule],
})
export class GameCharacterModule {}
