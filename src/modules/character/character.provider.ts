import { Character } from "./character.model"
import { CHARACTER_REPOSITORY } from "../../core/constants"

export const characterProviders = [
  {
    provide: CHARACTER_REPOSITORY,
    useValue: Character,
  },
]
