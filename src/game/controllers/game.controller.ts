import { Controller, Get, Post, Req, Res, Inject } from "@nestjs/common"
import { Request, Response } from "express"
import { IGameService } from "../interfaces/gameService.interface"

@Controller()
export class GameController {
  constructor(
    @Inject("GAME_SERVICE") private readonly gameService: IGameService,
  ) {}
}
