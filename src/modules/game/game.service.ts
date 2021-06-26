import { Inject, Injectable } from "@nestjs/common"
import { Game } from "./game.model"
import { Platform } from "../platform/platform.model"
import { Character } from "../character/character.model"
import { GameCharacterService } from "../game_character/game_character.service"
import { IGameService } from "./game.interface"
import { QueryOption } from "./types/query-option.type"
import { FindOptions } from "sequelize/types"
import { CreateGameDto } from "./dto/create-game.dto"
import { GAME_REPOSITORY } from "src/core/constants"

@Injectable()
export class GameService implements IGameService {
  constructor(
    @Inject(GAME_REPOSITORY) private gameRepository: typeof Game,
    @Inject(GameCharacterService) private gameCharacterService,
  ) {}

  /**
   * Create a new game in the data store
   * @param {CreateGameDto} payload
   * @returns {Game}
   */
  public async create(payload: CreateGameDto): Promise<Game> {
    return await this.gameRepository.create<Game>(payload)
  }

  /**
   * Retrieve all mario games
   * @param {QueryOptions} queryOptions - options passed from the controller
   * @returns {Game[]}
   */
  public async getAll(queryOptions?: QueryOption): Promise<Game[]> {
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

    return await this.gameRepository.findAll<Game>(options)
  }

  /**
   * Retrieve a single game by id primary key
   * @param {QueryOptions} queryOptions - options passed from the controller
   * @returns {Game}
   */
  public async getOne(id: number, queryOptions?: QueryOption): Promise<Game> {
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

    return await this.gameRepository.findOne<Game>(options)
  }

  /**
   * Gets the platform associated with a game
   * @param {number} id - game primary key
   * @returns {Platform}
   */
  public async getAssociatedPlatform(id: number): Promise<Platform> {
    const { platform } = await this.gameRepository.findOne<Game>({
      where: {
        id,
      },
      include: Platform,
    })

    return platform
  }

  /**
   * Use the GameCharacterService to associate a character with a game
   * Then return the game with associated characters
   * @param {AddCharacterDto} payload
   * @returns {Game}
   */
  public async addCharacter(payload): Promise<Game> {
    const { gameId } = payload
    await this.gameCharacterService.addCharacterToGame(payload)

    return await this.gameRepository.findOne<Game>({
      where: {
        id: gameId,
      },
      include: Character,
    })
  }

  /**
   * Update a game record in the data store
   * @param {Number} id - game record primary key
   * @param {object} payload
   * @returns {Game} updated game instance
   */
  public async update(id: number, payload): Promise<Game> {
    const game = await this.gameRepository.findOne<Game>({
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
  }

  /**
   * Delete a game record in the data store
   * @param {Number} id - primary key for record
   * @returns {Number} id for deleted record
   */
  public async delete(id: number): Promise<number> {
    const game = await this.gameRepository.findOne<Game>({
      where: {
        id,
      },
    })

    await game.destroy()

    return game.id
  }
}
