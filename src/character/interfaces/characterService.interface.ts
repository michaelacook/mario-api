// import { QueryOptions } from "../types/queryOptions"

export interface ICharacterService {
  getAll(options?: object)
  getOne(id: number, options?: object)
}
