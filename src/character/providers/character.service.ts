import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/sequelize"
import { ICharacterService } from "../interfaces/characterService.interface"
import { Character } from "../models/character.model"
import { Game } from "../../game/models/game.model"
import { QueryOptions } from "../types/queryOptions"

@Injectable()
export class CharacterService implements ICharacterService {
  constructor(@InjectModel(Character) private characterModel) {}

  /**
   * Retrieve all characters from the data store
   * @param {QueryOptions?} queryOptions - options passed in from the controller
   * @returns {Array}
   */
  public async getAll(queryOptions?: QueryOptions) {
    try {
      const options = {
        order: [],
      }

      if (queryOptions) {
        if (queryOptions.include_games) {
          options["include"] = Game
        }

        if (queryOptions.order_term) {
          options.order.push([queryOptions.order_term])
        }

        if (queryOptions.order_by) {
          options.order.length === 1
            ? options.order[0].push(queryOptions.order_by)
            : options.order.push([queryOptions.order_by])
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
  public async getOne(id: number, queryOptions?: QueryOptions) {
    try {
      const options = {
        where: {
          id,
        },
        order: [],
      }

      if (queryOptions) {
        if (queryOptions.include_games) {
          options["include"] = Game
        }

        if (queryOptions.order_term) {
          options.order.push(Game, [queryOptions.order_term])
        }

        if (queryOptions.order_by) {
          options.order.length === 2
            ? options.order[0].push(queryOptions.order_by)
            : options.order.push([queryOptions.order_by])
        }
      }

      const character = await this.characterModel.findOne(options)
      return character
    } catch (err) {
      return Promise.reject(err)
    }
  }
}
