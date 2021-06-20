import { IsString, IsInt, IsOptional } from "class-validator"

export class UpdateGameDto {
  @IsOptional()
  @IsString()
  readonly title?: string

  @IsOptional()
  @IsInt()
  readonly year?: number

  @IsOptional()
  @IsInt()
  readonly platformId?: number
}
