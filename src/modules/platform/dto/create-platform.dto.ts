import { IsString, IsInt } from "class-validator"

export class CreatePlatformDto {
  @IsString()
  readonly name: string

  @IsInt()
  readonly year: number
}
