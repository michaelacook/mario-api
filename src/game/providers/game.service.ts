import { Injectable, Options } from "@nestjs/common"
import { InjectModel } from "@nestjs/sequelize"
import { IGameService } from "../interfaces/gameService.interface"
import { Game } from "../models/game.model"
import { QueryOption } from "../types/queryOption"
import { GameCharacter } from "../../game_character/game_character.model"
import { Character } from "../../character/models/character.model"

@Injectable()
export class GameService implements IGameService {
  constructor(@InjectModel(Game) private gameModel) {}

  /**
   * Retrieve all mario games
   * @param {QueryOptions} queryOptions - options passed from the controller
   * @returns {Array}
   */
  public async getAll(queryOptions?: QueryOption) {
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
        if (queryOptions.include_characters) {
          options["include"] = Character
        }
      }

      const games = await this.gameModel.findAll(options)
      return games
    } catch (err) {
      console.log(err)
      return Promise.reject(err)
    }
  }

  /**
   * Retrieve a single game by id primary key
   * @param {QueryOptions} queryOptions - options passed from the controller
   * @returns {Object}
   */
  public async getOne(id: number, queryOptions?: QueryOption) {
    try {
      const options = {
        where: {
          id,
        },
      }

      if (queryOptions) {
        if (queryOptions.include_characters) {
          options["include"] = Character
        }
      }

      const game = await this.gameModel.findOne(options)
      return game
    } catch (err) {
      return Promise.reject(err)
    }
  }
}
