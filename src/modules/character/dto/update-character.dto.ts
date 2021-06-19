import { IsOptional, IsInt, IsString } from "class-validator"

export class UpdateCharacterDto {
  @IsOptional()
  @IsString()
  readonly name?: string

  @IsOptional()
  @IsInt()
  readonly year_released?: number

  @IsOptional()
  @IsInt()
  readonly debut_game?: number

  @IsOptional()
  @IsString()
  readonly image_url?: string
}
