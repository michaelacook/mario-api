import { QueryOptions } from "../types/queryOption"

export interface IGameService {
  getAll(queryOptions?: QueryOptions)
}
