import { QueryOption } from "../types/queryOption"

export interface IGameService {
  getAll(queryOptions?: QueryOption)
  getOne(id: number, queryOptions?: QueryOption)
}
