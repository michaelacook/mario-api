export interface IGameCharacterService {
  addCharacterToGame(payload: { gameId: number; characterId: number })
}
