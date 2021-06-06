import { Module } from "@nestjs/common"
import { SequelizeModule } from "@nestjs/sequelize"
import { Character } from "./models/character.model"
import { CharacterService } from "./providers/character.service"
import { Uploader } from "../uploader/uploader.service"
import { CharacterImageUploader } from "./providers/characterImageUploader"
import { CharacterController } from "./controllers/character.controller"

@Module({
  imports: [SequelizeModule.forFeature([Character])],
  exports: [SequelizeModule],
  controllers: [CharacterController],
  providers: [
    {
      provide: "CHARACTER_SERVICE",
      useClass: CharacterService,
    },
    CharacterImageUploader,
    Uploader,
  ],
})
export class CharacterModule {}
