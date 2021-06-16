import { Column, Model, Table, HasMany } from "sequelize-typescript"
import { Game } from "../game/game.model"

@Table
export class Platform extends Model<Platform> {
  @Column
  name: string

  @Column
  year: number

  @HasMany(() => Game)
  games: Game[]
}
