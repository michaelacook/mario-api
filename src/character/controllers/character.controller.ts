import { Controller, Get, Req, Res, Inject } from "@nestjs/common"
import { Request, Response } from "express"
import { ICharacterService } from "../interfaces/characterService.interface"

@Controller()
export class CharacterController {
  constructor(
    @Inject("CHARACTER_SERVICE")
    private readonly characterService: ICharacterService,
  ) {}
}
