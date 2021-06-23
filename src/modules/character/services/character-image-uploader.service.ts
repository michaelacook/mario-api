import { Injectable, Inject } from "@nestjs/common"
import { IUploader } from "src/core/interfaces/uploader.interface"
import { ICharacterImageUploader } from "../interfaces/character-image-uploader.interface"
import { Uploader } from "../../../core/uploader/uploader"
import { File } from "../../../core/types/file.type"
import { ICharacterService } from "../interfaces/character.interface"
import { CHARACTER_SERVICE } from "../constants"
import { UpdateCharacterDto } from "../dto/update-character.dto"

@Injectable()
export class CharacterImageUploader implements ICharacterImageUploader {
  constructor(
    @Inject(CHARACTER_SERVICE)
    private readonly characterService: ICharacterService,
    @Inject(Uploader) private readonly uploader: IUploader,
  ) {}

  /**
   * Upload a character image to the S3 bucket and add the url to the character database record
   * @param {Number} id - character primary key
   * @param {object} file
   * @returns {object} updated
   */
  public async addImage(id: number, file: File) {
    try {
      const image_url = await this.uploader.upload(file, "image/png")
      const payload: UpdateCharacterDto = { image_url }

      return await this.characterService.update(id, payload)
    } catch (err) {
      Promise.reject(err)
    }
  }
}
