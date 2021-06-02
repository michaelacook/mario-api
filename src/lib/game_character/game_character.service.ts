import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/sequelize"
import { IGameCharacterService } from "./game_character.interface"
import { GameCharacter } from "./game_character.model"

@Injectable()
export class GameCharacterService implements IGameCharacterService {
  constructor(@InjectModel(GameCharacter) private gameCharacterModel) {}

  public async addCharacterToGame(gameId: number, characterId: number) {
    try {
      const gameCharacter = await this.gameCharacterModel.create({
        gameId,
        characterId,
      })

      return gameCharacter
    } catch (err) {
      return Promise.reject(err)
    }
  }
}
