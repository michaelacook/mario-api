export class QueryOptions {
  include_games: true | undefined
  order_term: "id" | "name" | "year" | "createdAt" | "updatedAt" | undefined
  order_by: "ASC" | "DESC" | undefined
  limit: number | undefined
  offset: number | undefined
}
