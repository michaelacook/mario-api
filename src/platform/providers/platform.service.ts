import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/sequelize"
import { IPlatformService } from "../interfaces/platformService.interface"
import { Platform } from "../models/platform.model"
import { Game } from "../../game/models/game.model"
import { QueryOptionsDto } from "../dto/queryOptions.dto"

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
}
