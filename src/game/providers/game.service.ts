import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/sequelize"
import { IGameService } from "../interfaces/gameService.interface"
import { Game } from "../models/game.model"
import { QueryOptions } from "../types/queryOption"
import { Character } from "../../character/models/character.model"

@Injectable()
export class GameService implements IGameService {
  constructor(@InjectModel(Game) private gameModel) {}

  /**
   * Retrieve all mario games
   * @param {QueryOptions} queryOptions - options passed from the controller
   * @returns {Array}
   */
  public async getAll(queryOptions?: QueryOptions) {
    try {
      const options = {
        order: [],
      }

      if (queryOptions) {
        if (queryOptions.order_term) {
          options.order.push([queryOptions.order_term])
        }

        if (queryOptions.order_by) {
          options.order.length === 1
            ? options.order[0].push(queryOptions.order_by)
            : options.order.push([queryOptions.order_by])
        }

        if (queryOptions.include_characters) {
          options["include"] = Character
        }
      }

      const games = await this.gameModel.findAll(options)
      return games
    } catch (err) {
      return Promise.reject(err)
    }
  }
}
