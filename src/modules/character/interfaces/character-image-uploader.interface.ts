import { Character } from "../character.model"
import { File } from "../../../core/types/file.type"

export interface ICharacterImageUploader {
  addImage(id: number, file: File): Promise<Character>
}
