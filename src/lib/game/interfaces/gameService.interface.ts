import { QueryOption } from "../types/queryOption"

export interface IGameService {
  getAll(queryOptions?: QueryOption)
  getOne(id: number, queryOptions?: QueryOption)
  getAssociatedPlatform(id: number)
  create(payload: object)
  addCharacter(payload: object)
  update(id: number, payload: object)
  delete(id: number)
}
