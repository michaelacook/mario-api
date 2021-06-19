import { Injectable, Inject } from "@nestjs/common"
import { Platform } from "./platform.model"
import { Game } from "../game/game.model"
import { QueryOptionsDto } from "./dto/queryOptions.dto"
import { FindOptions } from "sequelize/types"
import { PLATFORM_REPOSITORY } from "src/core/constants"

@Injectable()
export class PlatformService {
  constructor(
    @Inject(PLATFORM_REPOSITORY)
    private readonly platformRepository: typeof Platform,
  ) {}

  /**
   * Retrieve all platform records from the data store
   * @param {QueryOptionsDto} queryOptions
   * @returns {Array}
   */
  public async getAll(queryOptions?: QueryOptionsDto) {
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

      const platforms = await this.platformRepository.findAll(options)
      return platforms
    } catch (err) {
      return Promise.reject(err)
    }
  }

  /**
   * Find a single platform record by primary key
   * @param {Number} id - record primary key
   * @param {QueryOptionsDto} queryOptions
   * @returns {object}
   */
  public async getOne(id: number, queryOptions?: QueryOptionsDto) {
    try {
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

      const platform = await this.platformRepository.findOne(options)
      return platform
    } catch (err) {
      return Promise.reject(err)
    }
  }

  /**
   * Create a new platform record in the data store
   * @param {CreatePlatformDto} payload
   * @returns {object} created platform record
   */
  public async create(payload) {
    try {
      const platform = await this.platformRepository.create(payload)
      return platform
    } catch (err) {
      return Promise.reject(err)
    }
  }

  /**
   * Update a platform record in the data store then return the updated instance
   * @param {number} id - platform record primary key
   * @param {CreatePlatformDto} payload
   * @returns {object} updated instance
   */
  public async update(id: number, payload) {
    try {
      const platform = await this.platformRepository.findOne({
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
    } catch (err) {
      return Promise.reject(err)
    }
  }

  /**
   * Delete a platform record in the data store
   * @param {Number} id - record primary key
   * @returns {Number} id for deleted record
   */
  public async delete(id: number) {
    try {
      const platform = await this.platformRepository.findOne({
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
