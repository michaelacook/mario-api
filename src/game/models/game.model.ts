import { Column, Model, Table } from "sequelize-typescript"

@Table
export class Game extends Model<Game> {
  @Column
  title: string

  @Column
  year: number

  @Column
  platformId: number
}
