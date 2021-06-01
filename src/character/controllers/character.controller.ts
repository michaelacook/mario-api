import {
  Controller,
  Get,
  Res,
  Query,
  Param,
  Inject,
  HttpException,
  HttpStatus,
  ParseIntPipe,
} from "@nestjs/common"
import { Response } from "express"
import { ICharacterService } from "../interfaces/characterService.interface"
import { QueryOptionsDto } from "../dto/queryOptions.dto"

@Controller("characters")
export class CharacterController {
  constructor(
    @Inject("CHARACTER_SERVICE")
    private readonly characterService: ICharacterService,
  ) {}

  @Get("/")
  public async getAll(@Query() query: QueryOptionsDto, @Res() res: Response) {
    try {
      const characters = await this.characterService.getAll(query)
      return res.json(characters)
    } catch (err) {
      console.log(err)
      throw new HttpException("Server Error", HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Get("/:id")
  public async getOne(
    @Param("id", ParseIntPipe) id: number,
    @Query() query: QueryOptionsDto,
    @Res() res: Response,
  ) {
    try {
      const character = await this.characterService.getOne(id, query)
      return res.json(character)
    } catch (err) {
      console.log(err)
      throw new HttpException("Server Error", HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
