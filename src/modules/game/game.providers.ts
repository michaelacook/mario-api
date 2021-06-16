import { Game } from "./game.model"

export const gameProviders = [
  {
    provide: "GAMES_REPOSITORY",
    useValue: Game,
  },
]
