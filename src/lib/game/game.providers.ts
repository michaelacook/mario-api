import { Game } from "./models/game.model"

export const gameProviders = [
  {
    provide: "GAMES_REPOSITORY",
    useValue: Game,
  },
]
