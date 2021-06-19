import { IsString, IsInt } from "class-validator"

export class CreateCharacterDto {
  @IsString()
  readonly name: string

  @IsInt()
  readonly year_released: number

  @IsInt()
  readonly debut_game: number
}
