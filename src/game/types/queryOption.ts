import { OrderTerm } from "./orderTerm"

export type QueryOptions = {
  order_term: OrderTerm
  order_by: "ASC" | "DESC" | undefined
  include_characters: "true" | undefined
}
