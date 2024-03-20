import { Injectable, Inject } from "@nestjs/common"
import { GameCharacter } from "./game_character.model"
import { IGameCharacterService } from "./game_character.interface"
import { GameCharacterDto } from "./game-character.dto"
import { GAME_CHARACTER_REPOSITORY } from "src/core/constants"

@Injectable()
export class GameCharacterService implements IGameCharacterService {
  constructor(
    @Inject(GAME_CHARACTER_REPOSITORY)
    private readonly gameCharacterRepository: typeof GameCharacter,
  ) {}

  /**
   * Associate a character with a game
   * @param {GameCharacterDto} payload
   * @returns {GameCharacter} instance
   * 
   * removing DTO for now, causes type error
   */
  public async addCharacterToGame(payload): Promise<GameCharacter> {
    return await this.gameCharacterRepository.create<GameCharacter>(payload)
  }
}
