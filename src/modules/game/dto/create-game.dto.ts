import { IsString, IsInt } from "class-validator"

export class CreateGameDto {
  @IsString()
  readonly title: string

  @IsInt()
  readonly year: number

  @IsInt()
  readonly platformId: number
}
