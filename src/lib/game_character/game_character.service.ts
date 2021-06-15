import { Injectable, Inject } from "@nestjs/common"
import { GameCharacter } from "./game_character.model"

@Injectable()
export class GameCharacterService {
  constructor(
    @Inject("GAME_CHARACTERS_REPOSITORY")
    private readonly gameCharacterRepository: typeof GameCharacter,
  ) {}

  public async addCharacterToGame(payload) {
    try {
      const gameCharacter = await this.gameCharacterRepository.create(payload)

      return gameCharacter
    } catch (err) {
      return Promise.reject(err)
    }
  }
}
