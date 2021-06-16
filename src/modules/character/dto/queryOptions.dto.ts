import { OrderTerm } from "../types/orderTerm"

export class QueryOptionsDto {
  order_by: "ASC" | "DESC" | undefined
  order_term: OrderTerm | undefined
  include_games: "true" | undefined
  limit: number | undefined
  offset: number | undefined
}
