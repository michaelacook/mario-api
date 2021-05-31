import { Column, Model, Table } from "sequelize-typescript"

@Table
export class Character extends Model<Character> {
  @Column
  name: string

  @Column
  year_released: number

  // FK relationship with game id
  @Column
  debut_game: number
}
