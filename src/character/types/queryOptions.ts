import { OrderTerm } from "./orderTerm"

// types the options that can be passed to a CharacterService method
export type QueryOptions = {
  order_by: "ASC" | "DESC" | undefined
  order_term: OrderTerm | undefined
  include_games: "true" | undefined
}
