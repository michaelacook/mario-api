import { GameCharacter } from "./game_character.model"

export const gameCharacterProviders = [
  {
    provide: "GAME_CHARACTERS_REPOSITORY",
    useValue: GameCharacter,
  },
]
