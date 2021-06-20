import { IsInt } from "class-validator"

export class GameCharacterDto {
  @IsInt()
  readonly gameId: number

  @IsInt()
  readonly characterId: number
}
