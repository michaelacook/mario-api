import { OrderTerm } from "./order-term.type"

export type QueryOption = {
  order_term: OrderTerm
  order_by: "ASC" | "DESC" | undefined
  include_characters: "true" | undefined
  include_platform: true | undefined
  limit: number | undefined
  offset: number | undefined
}
