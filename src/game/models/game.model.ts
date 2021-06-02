import {
  Column,
  Model,
  Table,
  ForeignKey,
  BelongsToMany,
  HasOne,
  BelongsTo,
} from "sequelize-typescript"
import { Platform } from "../../platform/models/platform.model"
import { Character } from "../../character/models/character.model"
import { GameCharacter } from "../../game_character/game_character.model"

@Table
export class Game extends Model<Game> {
  @Column
  title: string

  @Column
  year: number

  @ForeignKey(() => Platform)
  @Column
  platformId: number

  @BelongsToMany(() => Character, () => GameCharacter)
  characters: Character[]

  @BelongsTo(() => Platform)
  platform: Platform
}
