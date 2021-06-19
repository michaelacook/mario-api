import { GameCharacter } from "./game_character.model"
import { GAME_CHARACTER_REPOSITORY } from "src/core/constants"

export const gameCharacterProviders = [
  {
    provide: GAME_CHARACTER_REPOSITORY,
    useValue: GameCharacter,
  },
]
