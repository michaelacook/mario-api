import { IsString, IsInt, IsOptional } from "class-validator"

export class UpdatePlatformDto {
  @IsOptional()
  @IsString()
  readonly name?: string

  @IsOptional()
  @IsInt()
  readonly year?: number
}
