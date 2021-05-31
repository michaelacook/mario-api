import { Column, Model, Table } from "sequelize-typescript"

@Table
export class Platform extends Model<Platform> {
  @Column
  name: string

  @Column
  year: number
}
