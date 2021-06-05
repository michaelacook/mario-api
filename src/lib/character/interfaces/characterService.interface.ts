export interface ICharacterService {
  getAll(options?: object)
  getOne(id: number, options?: object)
  getAssociatedGames(id: number)
  getImage(id: number)
  create(payload: object)
  update(id: number, payload: object)
  delete(id: number)
}
