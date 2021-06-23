import { Inject, Injectable } from "@nestjs/common"
import { Character } from "../character.model"
import { Game } from "../../game/game.model"
import { ICharacterService } from "../interfaces/character.interface"
import { QueryOptions } from "../types/query-options.type"
import { FindOptions } from "sequelize/types"
import { CreateCharacterDto } from "../dto/create-character.dto"
import { CHARACTER_REPOSITORY } from "src/core/constants"

@Injectable()
export class CharacterService implements ICharacterService {
  constructor(
    @Inject(CHARACTER_REPOSITORY)
    private readonly characterRepository: typeof Character,
  ) {}

  /**
   * Add a character record to the data store
   * @param {CreateCharacterDto} payload
   * @returns {Character}
   */
  public async create(payload: CreateCharacterDto): Promise<Character> {
    return await this.characterRepository.create<Character>({ ...payload })
  }

  /**
   * Retrieve all characters from the data store
   * @param {QueryOptions?} queryOptions - options passed in from the controller
   * @returns {Array}
   */
  public async getAll(queryOptions?: QueryOptions): Promise<Character[]> {
    const options: FindOptions = {
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

    return await this.characterRepository.findAll<Character>(options)
  }

  /**
   * Get a single character record by id primary key
   * @param {Number} id - character PK
   * @param {QueryOptions?} queryOptions - options passed in from the controller
   * @returns {Object}
   */
  public async getOne(
    id: number,
    queryOptions?: QueryOptions,
  ): Promise<Character> {
    const options: FindOptions = {
      where: {
        id,
      },
    }

    if (queryOptions) {
      if (queryOptions.include_games) {
        options["include"] = Game
      }
    }

    return await this.characterRepository.findOne<Character>(options)
  }

  /**
   * Get the associated games for a character record
   * @param {number} id - character record primary key
   * @returns {Array}
   */
  public async getAssociatedGames(id: number): Promise<Game[]> {
    const { games } = await this.characterRepository.findOne<Character>({
      where: {
        id,
      },
      include: Game,
    })

    return games
  }

  /**
   * Get the image url for a character record
   * @param {Number} id - record primary key
   * @returns {String} imgUrl
   */
  public async getImage(id: number): Promise<Character> {
    return await this.characterRepository.findOne<Character>({
      where: {
        id,
      },
      attributes: ["image_url"],
    })
  }

  /**
   * Update a character record in the data store
   * @param {Number} id - record primary key
   * @param {UpdateCharacterDto} payload
   * @returns {object}
   */
  public async update(id: number, payload): Promise<Character> {
    const character = await this.characterRepository.findOne<Character>({
      where: {
        id,
      },
    })

    for (let key in payload) {
      if (key in payload) {
        character[key] = payload[key]
      }
    }

    await character.save()
    await character.reload()

    return character
  }

  /**
   * Delete a character record in the data store
   * @param {Number} id - primary key
   * @returns {Number} character id for deleted record
   * Returning record id is helpful for client apps that want
   * to use the returned id to remove the record from their own
   * application state upon successful delete on the server
   */
  public async delete(id: number): Promise<number> {
    const character = await this.characterRepository.findOne<Character>({
      where: {
        id,
      },
    })

    await character.destroy()

    return character.id
  }
}
