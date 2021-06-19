import { Game } from "./game.model"
import { GAME_REPOSITORY } from "src/core/constants"

export const gameProviders = [
  {
    provide: GAME_REPOSITORY,
    useValue: Game,
  },
]
