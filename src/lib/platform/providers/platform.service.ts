import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/sequelize"
import { IPlatformService } from "../interfaces/platformService.interface"
import { Platform } from "../models/platform.model"
import { Game } from "../../game/models/game.model"
import { QueryOptionsDto } from "../dto/queryOptions.dto"
import { CreatePlatformDto } from "../dto/createPlatform.dto"

@Injectable()
export class PlatformService implements IPlatformService {
  constructor(@InjectModel(Platform) private platformModel) {}

  /**
   * Retrieve all platform records from the data store
   * @param {QueryOptionsDto} queryOptions
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

      const platforms = await this.platformModel.findAll(options)
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

      const platform = await this.platformModel.findOne(options)
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
  public async create(payload: CreatePlatformDto) {
    try {
      const platform = await this.platformModel.create(payload)
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
  public async update(id: number, payload: CreatePlatformDto) {
    try {
      const platform = await this.platformModel.findOne({
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
      const platform = await this.platformModel.findOne({
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
