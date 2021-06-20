import { IsInt } from "class-validator"

export class AddCharacterDto {
  @IsInt()
  readonly gameId: number

  @IsInt()
  readonly characterId: number
}
