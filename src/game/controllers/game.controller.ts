import {
  Controller,
  Get,
  Post,
  Req,
  Res,
  Query,
  Param,
  HttpException,
  HttpStatus,
  Inject,
  ParseIntPipe,
  Body,
} from "@nestjs/common"
import { Response } from "express"
import { QueryStringObject } from "../types/queryString"
import { IGameService } from "../interfaces/gameService.interface"
import { CreateGameDto } from "../dto/createGame.dto"
import { AddCharacterDto } from "../dto/addCharacter.dto"

@Controller("games")
export class GameController {
  constructor(
    @Inject("GAME_SERVICE") private readonly gameService: IGameService,
  ) {}

  @Get("/")
  public async getAll(@Query() query: QueryStringObject, @Res() res: Response) {
    try {
      const games = await this.gameService.getAll(query)
      return res.json(games)
    } catch (err) {
      throw new HttpException("Server Error", HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Get("/:id")
  public async getOne(
    @Query() query: QueryStringObject,
    @Param("id", ParseIntPipe) id: number,
    @Res() res: Response,
  ) {
    try {
      const game = await this.gameService.getOne(id, query)
      return res.json(game)
    } catch (err) {
      throw new HttpException("Server Error", HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Post("/")
  public async create(
    @Body() createGameDto: CreateGameDto,
    @Res() res: Response,
  ) {
    try {
      const game = await this.gameService.create(createGameDto)
      return res.status(201).json(game)
    } catch (err) {
      throw new HttpException("Server Error", HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  /**
   * Associate a character with a game
   */
  @Post("/:id/characters")
  public async addCharacter(
    @Param("id", ParseIntPipe) id: number,
    @Body() body: { characterId: number },
    @Res() res: Response,
  ) {
    try {
      const payload: AddCharacterDto = {
        gameId: id,
        characterId: body.characterId,
      }
      const gameWithChars = await this.gameService.addCharacter(payload)
      return res.status(201).json(gameWithChars)
    } catch (err) {
      throw new HttpException("Server Error", HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
