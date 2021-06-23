import { Module } from "@nestjs/common"
import { DatabaseModule } from "../../core/database/database.module"
import { CharacterService } from "./services/character.service"
import { Uploader } from "../../core/uploader/uploader"
import { CharacterImageUploader } from "./services/character-image-uploader.service"
import { CharacterController } from "./character.controller"
import { characterProviders } from "./character.provider"
import { CHARACTER_SERVICE } from "./constants"
import { CHARACTER_IMAGE_UPLOADER } from "./constants"

@Module({
  imports: [DatabaseModule],
  controllers: [CharacterController],
  providers: [
    {
      provide: CHARACTER_SERVICE,
      useClass: CharacterService,
    },
    {
      provide: CHARACTER_IMAGE_UPLOADER,
      useClass: CharacterImageUploader,
    },
    Uploader,
    ...characterProviders,
  ],
})
export class CharacterModule {}
