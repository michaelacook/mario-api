import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/sequelize"
import { ICharacterService } from "../interfaces/characterService.interface"
import { Character } from "../models/character.model"
import { Game } from "../../game/models/game.model"
import { QueryOptionsDto } from "../dto/queryOptions.dto"
import { CreateCharacterDto } from "../dto/createCharacter.dto"
import { UpdateCharacterDto } from "../dto/updateCharacter.dto"

@Injectable()
export class CharacterService implements ICharacterService {
  constructor(@InjectModel(Character) private characterModel) {}

  /**
   * Retrieve all characters from the data store
   * @param {QueryOptions?} queryOptions - options passed in from the controller
   * @returns {Array}
   */
  public async getAll(queryOptions?: QueryOptionsDto) {
    try {
      const options = {
        order: [
          [
            queryOptions.order_term ? queryOptions.order_term : "id",
            queryOptions.order_by ? queryOptions.order_by : "ASC",
          ],
        ],
      }

      if (queryOptions) {
        if (queryOptions.include_games) {
          options["include"] = Game
        }

        if (queryOptions.limit) {
          options["limit"] = queryOptions.limit
        }

        if (queryOptions.offset) {
          options["offset"] = queryOptions.offset
        }
      }

      const characters = await this.characterModel.findAll(options)
      return characters
    } catch (err) {
      return Promise.reject(err)
    }
  }

  /**
   * Get a single character record by id primary key
   * @param {Number} id - character PK
   * @param {QueryOptions?} queryOptions - options passed in from the controller
   * @returns {Object}
   */
  public async getOne(id: number, queryOptions?: QueryOptionsDto) {
    try {
      const options = {
        where: {
          id,
        },
      }

      if (queryOptions) {
        if (queryOptions.include_games) {
          options["include"] = Game
        }
      }

      const character = await this.characterModel.findOne(options)
      return character
    } catch (err) {
      return Promise.reject(err)
    }
  }

  /**
   * Add a character record to the data store
   * @param {CreateCharacterDto} payload
   * @returns {object}
   */
  public async create(payload: CreateCharacterDto) {
    try {
      const character = await this.characterModel.create(payload)
      return character
    } catch (err) {
      return Promise.reject(err)
    }
  }

  /**
   * Update a character record in the data store
   * @param {Number} id - record primary key
   * @param {UpdateCharacterDto} payload
   * @returns {object}
   */
  public async update(id: number, payload: UpdateCharacterDto) {
    try {
      const character = await this.characterModel.findOne({
        where: id,
      })

      for (let key in payload) {
        if (character[key]) {
          character[key] = payload[key]
        }
      }

      await character.save()
      await character.reload()

      return character
    } catch (err) {
      return Promise.reject(err)
    }
  }
}
