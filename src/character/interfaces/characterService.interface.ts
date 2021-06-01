export interface ICharacterService {
  getAll(options?: object)
  getOne(id: number, options?: object)
  create(payload: object)
}
