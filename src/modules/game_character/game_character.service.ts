import { Injectable, Inject } from "@nestjs/common"
import { GameCharacter } from "./game_character.model"
import { GameCharacterDto } from "./game-character.dto"
import { GAME_CHARACTER_REPOSITORY } from "src/core/constants"

@Injectable()
export class GameCharacterService {
  constructor(
    @Inject(GAME_CHARACTER_REPOSITORY)
    private readonly gameCharacterRepository: typeof GameCharacter,
  ) {}

  /**
   * Associate a character with a game
   * @param {GameCharacterDto} payload
   * @returns {GameCharacter} instance
   */
  public async addCharacterToGame(
    payload: GameCharacterDto,
  ): Promise<GameCharacter> {
    return await this.gameCharacterRepository.create<GameCharacter>(payload)
  }
}
