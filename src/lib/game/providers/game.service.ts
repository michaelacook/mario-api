import { Inject, Injectable, Options } from "@nestjs/common"
import { InjectModel } from "@nestjs/sequelize"
import { IGameService } from "../interfaces/gameService.interface"
import { Game } from "../models/game.model"
import { QueryOption } from "../types/queryOption"
import { Character } from "../../character/models/character.model"
import { CreateGameDto } from "../dto/createGame.dto"
import { AddCharacterDto } from "../dto/addCharacter.dto"
import { GameCharacterService } from "../../game_character/game_character.service"
import { Platform } from "../../platform/models/platform.model"

@Injectable()
export class GameService implements IGameService {
  constructor(
    @InjectModel(Game) private gameModel,
    @Inject(GameCharacterService) private gameCharacterService,
  ) {}

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
        const { include_characters, include_platform } = queryOptions
        if (include_characters && include_platform) {
          options["include"] = [
            {
              model: Character,
            },
            {
              model: Platform,
            },
          ]
        } else if (include_characters) {
          options["include"] = Character
        } else if (include_platform) {
          options["include"] = Platform
        }

        if (queryOptions.limit) {
          options["limit"] = queryOptions.limit
        }

        if (queryOptions.offset) {
          options["offset"] = queryOptions.offset
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
        const { include_characters, include_platform } = queryOptions
        if (include_characters && include_platform) {
          options["include"] = [
            {
              model: Character,
            },
            {
              model: Platform,
            },
          ]
        } else if (include_characters) {
          options["include"] = Character
        } else if (include_platform) {
          options["include"] = Platform
        }
      }

      const game = await this.gameModel.findOne(options)
      return game
    } catch (err) {
      return Promise.reject(err)
    }
  }

  /**
   * Create a new game in the data store
   * @param {CreateGameDto} payload
   * @returns {object}
   */
  public async create(payload: CreateGameDto) {
    try {
      const game = await this.gameModel.create(payload)
      return game
    } catch (err) {
      return Promise.reject(err)
    }
  }

  /**
   * Use the GameCharacterService to associate a character with a game
   * Then return the game with associated characters
   * @param {AddCharacterDto} payload
   * @returns {object}
   */
  public async addCharacter(payload: AddCharacterDto) {
    try {
      const { gameId, characterId } = payload
      await this.gameCharacterService.addCharacterToGame(gameId, characterId)

      const game = await this.gameModel.findOne({
        where: {
          id: gameId,
        },
        include: Character,
      })

      return game
    } catch (err) {
      return Promise.reject(err)
    }
  }

  /**
   * Update a game record in the data store
   * @param {Number} id - game record primary key
   * @param {object} payload
   * @returns {object} updated game instance
   */
  public async update(id: number, payload: CreateGameDto) {
    try {
      const game = await this.gameModel.findOne({
        where: {
          id,
        },
      })

      for (let key in payload) {
        if (game[key]) {
          game[key] = payload[key]
        }
      }

      await game.save()
      await game.reload()

      return game
    } catch (err) {
      return Promise.reject(err)
    }
  }

  /**
   * Delete a game record in the data store
   * @param {Number} id - primary key for record
   * @returns {Number} id for deleted record
   */
  public async delete(id: number) {
    try {
      const game = await this.gameModel.findOne({
        where: {
          id,
        },
      })

      await game.destroy()

      return game.id
    } catch (err) {
      return Promise.reject(err)
    }
  }
}
