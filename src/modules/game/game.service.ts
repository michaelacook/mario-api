import { Inject, Injectable } from "@nestjs/common"
import { Game } from "./game.model"
import { Platform } from "../platform/platform.model"
import { Character } from "../character/character.model"
import { GameCharacterService } from "../game_character/game_character.service"
import { QueryOption } from "./types/queryOption"
import { FindOptions } from "sequelize/types"
import { GAME_REPOSITORY } from "src/core/constants"

@Injectable()
export class GameService {
  constructor(
    @Inject(GAME_REPOSITORY) private gameRepository: typeof Game,
    @Inject(GameCharacterService) private gameCharacterService,
  ) {}

  /**
   * Retrieve all mario games
   * @param {QueryOptions} queryOptions - options passed from the controller
   * @returns {Array}
   */
  public async getAll(queryOptions?: QueryOption) {
    try {
      const options: FindOptions = {
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

      const games = await this.gameRepository.findAll(options)
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

      const game = await this.gameRepository.findOne(options)
      return game
    } catch (err) {
      return Promise.reject(err)
    }
  }

  public async getAssociatedPlatform(id: number) {
    try {
      const { platform } = await this.gameRepository.findOne({
        where: {
          id,
        },
        include: Platform,
      })

      return platform
    } catch (err) {
      return Promise.reject(err)
    }
  }

  /**
   * Create a new game in the data store
   * @param {CreateGameDto} payload
   * @returns {object}
   */
  public async create(payload) {
    try {
      const game = await this.gameRepository.create(payload)
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
  public async addCharacter(payload) {
    try {
      const { gameId } = payload
      await this.gameCharacterService.addCharacterToGame(payload)

      const game = await this.gameRepository.findOne({
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
  public async update(id: number, payload) {
    try {
      const game = await this.gameRepository.findOne({
        where: {
          id,
        },
      })

      for (let key in payload) {
        if (key in payload) {
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
      const game = await this.gameRepository.findOne({
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
