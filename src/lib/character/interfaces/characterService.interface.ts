export interface ICharacterService {
  getAll(options?: object)
  getOne(id: number, options?: object)
  create(payload: object)
  update(id: number, payload: object)
  delete(id: number)
}
