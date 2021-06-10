import {
  Controller,
  Get,
  Post,
  Res,
  Query,
  Param,
  Inject,
  ParseIntPipe,
  Body,
  Put,
  Delete,
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
    const games = await this.gameService.getAll(query)
    return res.json(games)
  }

  @Get("/:id")
  public async getOne(
    @Query() query: QueryStringObject,
    @Param("id", ParseIntPipe) id: number,
    @Res() res: Response,
  ) {
    const game = await this.gameService.getOne(id, query)
    return res.json(game)
  }

  @Get("/:id/platform")
  public async getGamePlatform(
    @Param("id", ParseIntPipe) id: number,
    @Res() res: Response,
  ) {
    const platform = await this.gameService.getAssociatedPlatform(id)
    return res.json(platform)
  }

  @Post("/")
  public async create(
    @Body() createGameDto: CreateGameDto,
    @Res() res: Response,
  ) {
    const game = await this.gameService.create(createGameDto)
    return res.status(201).json(game)
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
    const payload: AddCharacterDto = {
      gameId: id,
      characterId: body.characterId,
    }
    const gameWithChars = await this.gameService.addCharacter(payload)
    return res.status(201).json(gameWithChars)
  }

  @Put("/:id")
  public async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateGame: CreateGameDto,
    @Res() res: Response,
  ) {
    const game = await this.gameService.update(id, updateGame)
    return res.json(game)
  }

  @Delete("/:id")
  public async delete(
    @Param("id", ParseIntPipe) id: number,
    @Res() res: Response,
  ) {
    const gameId = await this.gameService.delete(id)
    return res.json(gameId)
  }
}
