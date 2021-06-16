import { Injectable, Inject } from "@nestjs/common"
import { GameCharacter } from "./game_character.model"
import { GAME_CHARACTERS_REPOSITORY } from "src/core/constants"

@Injectable()
export class GameCharacterService {
  constructor(
    @Inject(GAME_CHARACTERS_REPOSITORY)
    private readonly gameCharacterRepository: typeof GameCharacter,
  ) {}

  /**
   * Associate a character with a game
   * @param {Object} payload
   * @returns {GameCharacter} instance
   */
  public async addCharacterToGame(payload) {
    try {
      const gameCharacter = await this.gameCharacterRepository.create(payload)
      return gameCharacter
    } catch (err) {
      return Promise.reject(err)
    }
  }
}
