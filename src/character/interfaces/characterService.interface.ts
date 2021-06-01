import { QueryOptions } from "../types/queryOptions"

export interface ICharacterService {
  getAll(options?: QueryOptions)
  getOne(id: number, options?: QueryOptions)
}
