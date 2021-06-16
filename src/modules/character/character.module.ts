import { Module } from "@nestjs/common"
import { DatabaseModule } from "../../core/database/database.module"
import { CharacterService } from "./character.service"
import { Uploader } from "../uploader/uploader.service"
import { CharacterImageUploader } from "./characterImageUploader.service"
import { CharacterController } from "./character.controller"
import { characterProviders } from "./character.provider"

@Module({
  imports: [DatabaseModule],
  controllers: [CharacterController],
  providers: [
    CharacterService,
    CharacterImageUploader,
    Uploader,
    ...characterProviders,
  ],
})
export class CharacterModule {}
