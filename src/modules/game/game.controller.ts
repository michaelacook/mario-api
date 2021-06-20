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
import { GameService } from "./game.service"
import { QueryStringObject } from "./types/query-string.type"
import { CreateGameDto } from "./dto/create-game.dto"
import { UpdateGameDto } from "./dto/update-game.dto"
import { AddCharacterDto } from "./dto/add-character.dto"
import { GameExistsPipe } from "./pipes/game-exists.pipe"

@Controller("games")
export class GameController {
  constructor(@Inject(GameService) private readonly gameService: GameService) {}

  @Get("/")
  public async getAll(@Query() query: QueryStringObject, @Res() res: Response) {
    const games = await this.gameService.getAll(query)
    return res.json(games)
  }

  @Get("/:id")
  public async getOne(
    @Query() query: QueryStringObject,
    @Param("id", ParseIntPipe, GameExistsPipe) id: number,
    @Res() res: Response,
  ) {
    const game = await this.gameService.getOne(id, query)
    return res.json(game)
  }

  @Get("/:id/platform")
  public async getGamePlatform(
    @Param("id", ParseIntPipe, GameExistsPipe) id: number,
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
    @Param("id", ParseIntPipe, GameExistsPipe) id: number,
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
    @Param("id", ParseIntPipe, GameExistsPipe) id: number,
    @Body() updateGame: UpdateGameDto,
    @Res() res: Response,
  ) {
    const game = await this.gameService.update(id, updateGame)
    return res.json(game)
  }

  @Delete("/:id")
  public async delete(
    @Param("id", ParseIntPipe, GameExistsPipe) id: number,
    @Res() res: Response,
  ) {
    const gameId = await this.gameService.delete(id)
    return res.json(gameId)
  }
}
