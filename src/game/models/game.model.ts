import { Column, Model, Table, ForeignKey } from "sequelize-typescript"
import { Platform } from "../../platform/models/platform.model"

@Table
export class Game extends Model<Game> {
  @Column
  title: string

  @Column
  year: number

  @ForeignKey(() => Platform)
  @Column
  platformId: number
}
