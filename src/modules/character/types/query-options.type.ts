import { OrderTerm } from "./order-term.type"

export type QueryOptions = {
  order_by: "ASC" | "DESC" | undefined
  order_term: OrderTerm | undefined
  include_games: "true" | undefined
  limit: number | undefined
  offset: number | undefined
}
