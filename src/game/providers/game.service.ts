import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/sequelize"
import { IGameService } from "../interfaces/gameService.interface"
import { Game } from "../models/game.model"

@Injectable()
export class GameService implements IGameService {
  constructor(@InjectModel(Game) private gameModel) {}
}
