import { Injectable, Inject } from "@nestjs/common"
import { Uploader } from "../../uploader/uploader.service"
import { ICharacterService } from "../interfaces/characterService.interface"
import { UpdateCharacterDto } from "../dto/updateCharacter.dto"
import { ICharacterImageUploader } from "../interfaces/characterImageUpload.interface"

@Injectable()
export class CharacterImageUploader extends Uploader implements ICharacterImageUploader {
  constructor(
    @Inject("CHARACTER_SERVICE")
    private readonly characterService: ICharacterService,
  ) {
    super()
  }

  /**
   * Upload a character image to the S3 bucket and add the url to the character database record
   * @param {Number} id - character primary key
   * @param {object} file
   * @returns {object} updated
   */
  public async addImage(id: number, file) {
    try {
      const image_url = await this.upload(file, "image/png")
      const payload: UpdateCharacterDto = { image_url }
      const character = await this.characterService.update(id, payload)

      return character
    } catch (err) {
      Promise.reject(err)
    }
  }
}
