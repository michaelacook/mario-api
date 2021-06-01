import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/sequelize"
import { IPlatformService } from "../interfaces/platformService.interface"
import { Platform } from "../models/platform.model"
import { Game } from "../../game/models/game.model"
import { QueryOptionsDto } from "../dto/queryOptions.dto"

@Injectable()
export class PlatformService implements IPlatformService {
  constructor(@InjectModel(Platform) private platformModel) {}

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
}
