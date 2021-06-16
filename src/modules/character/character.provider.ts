import { Character } from "./character.model"

export const characterProviders = [
  {
    provide: "CHARACTERS_REPOSITORY",
    useValue: Character,
  },
]
