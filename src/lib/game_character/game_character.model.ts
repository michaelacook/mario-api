// junction table for Game and Character relation

import { Column, Model, Table, ForeignKey } from "sequelize-typescript"
import { Game } from "../game/models/game.model"
import { Character } from "../character/models/character.model"

@Table
export class GameCharacter extends Model<GameCharacter> {
  @ForeignKey(() => Game)
  @Column
  gameId: number

  @ForeignKey(() => Character)
  @Column
  characterId: number
}