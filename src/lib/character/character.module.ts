import { Module } from "@nestjs/common"
// import { SequelizeModule } from "@nestjs/sequelize"
import { DatabaseModule } from "../../database/database.module"
import { Character } from "./models/character.model"
import { CharacterService } from "./providers/character.service"
import { Uploader } from "../uploader/uploader.service"
import { CharacterImageUploader } from "./providers/characterImageUploader.service"
import { CharacterController } from "./controllers/character.controller"
import { characterProviders } from "./character.provider"

@Module({
  imports: [DatabaseModule],
  // exports: [SequelizeModule],
  controllers: [CharacterController],
  providers: [
    CharacterService,
    CharacterImageUploader,
    Uploader,
    ...characterProviders,
  ],
})
export class CharacterModule {}
