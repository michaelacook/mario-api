import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/sequelize"
import { ICharacterService } from "../interfaces/characterService.interface"
import { Character } from "../models/character.model"

@Injectable()
export class CharacterService implements ICharacterService {
  constructor(@InjectModel(Character) private characterModel) {}

  /**
   * Retrieve all characters from the data store
   * @returns {Array}
   */
  public async getAll() {
    try {
      const characters = await this.characterModel.findAll()
      return characters
    } catch (err) {
      return err
    }
  }

  /**
   * Get a single character record by id primary key
   * @param {Number} id - character PK
   * @returns {Object}
   */
  public async getOne(id: number) {
    try {
      const character = await this.characterModel.findOne({
        where: {
          id,
        },
      })
      return character
    } catch (err) {
      return err
    }
  }
}
