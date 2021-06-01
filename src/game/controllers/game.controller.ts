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
} from "@nestjs/common"
import { Response } from "express"
import { QueryStringObject } from "../types/queryString"
import { IGameService } from "../interfaces/gameService.interface"

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
    @Param("id") id: number,
    @Res() res: Response,
  ) {
    try {
      const game = await this.gameService.getOne(id, query)
      return res.json(game)
    } catch (err) {
      console.log(err)
      throw new HttpException("Server Error", HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
