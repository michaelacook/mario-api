import { Injectable, Inject } from "@nestjs/common"
import { Platform } from "./platform.model"
import { Game } from "../game/game.model"
import { QueryOptionsDto } from "./dto/queryOptions.dto"
import { FindOptions } from "sequelize/types"
import { PLATFORM_REPOSITORY } from "src/core/constants"
import { CreatePlatformDto } from "./dto/createPlatform.dto"
import { UpdatePlatformDto } from "./dto/updatePlatform.dto"

@Injectable()
export class PlatformService {
  constructor(
    @Inject(PLATFORM_REPOSITORY)
    private readonly platformRepository: typeof Platform,
  ) {}

  /**
   * Create a new platform record in the data store
   * @param {CreatePlatformDto} payload
   * @returns {Platform} created platform record
   */
  public async create(payload: CreatePlatformDto): Promise<Platform> {
    return await this.platformRepository.create<Platform>(payload)
  }

  /**
   * Retrieve all platform records from the data store
   * @param {QueryOptionsDto} queryOptions
   * @returns {Platform[]}
   */
  public async getAll(queryOptions?: QueryOptionsDto): Promise<Platform[]> {
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

    return await this.platformRepository.findAll<Platform>(options)
  }

  /**
   * Find a single platform record by primary key
   * @param {Number} id - record primary key
   * @param {QueryOptionsDto} queryOptions
   * @returns {Platform}
   */
  public async getOne(
    id: number,
    queryOptions?: QueryOptionsDto,
  ): Promise<Platform> {
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

    return await this.platformRepository.findOne<Platform>(options)
  }

  /**
   * Update a platform record in the data store then return the updated instance
   * @param {number} id - platform record primary key
   * @param {CreatePlatformDto} payload
   * @returns {Platform} updated instance
   */
  public async update(
    id: number,
    payload: UpdatePlatformDto,
  ): Promise<Platform> {
    const platform = await this.platformRepository.findOne<Platform>({
      where: {
        id,
      },
    })

    for (let key in payload) {
      if (key in payload) {
        platform[key] = payload[key]
      }
    }

    await platform.save()
    await platform.reload()

    return platform
  }

  /**
   * Delete a platform record in the data store
   * @param {Number} id - record primary key
   * @returns {Number} id for deleted record
   */
  public async delete(id: number): Promise<number> {
    try {
      const platform = await this.platformRepository.findOne<Platform>({
        where: {
          id,
        },
      })

      await platform.destroy()

      return platform.id
    } catch (err) {
      Promise.reject(err)
    }
  }
}
