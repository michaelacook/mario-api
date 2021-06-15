import { Character } from "./models/character.model"

export const characterProviders = [
  {
    provide: "CHARACTERS_REPOSITORY",
    useValue: Character,
  },
]
