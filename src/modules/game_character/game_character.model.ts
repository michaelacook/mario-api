// junction table for Game and Character relation

import { Column, Model, Table, ForeignKey } from "sequelize-typescript"
import { Game } from "../game/game.model"
import { Character } from "../character/character.model"

@Table
export class GameCharacter extends Model<GameCharacter> {
  @ForeignKey(() => Game)
  @Column
  gameId: number

  @ForeignKey(() => Character)
  @Column
  characterId: number
}
