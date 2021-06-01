import { Controller, Get, Req, Res, Inject } from "@nestjs/common"
import { Request, Response } from "express"
import { ICharacterService } from "../interfaces/characterService.interface"

@Controller("characters")
export class CharacterController {
  constructor(
    @Inject("CHARACTER_SERVICE")
    private readonly characterService: ICharacterService,
  ) {}

  @Get("/")
  public async getAll(@Res() res: Response) {
    const characters = await this.characterService.getAll()
    return res.json(characters)
  }

  @Get("/:id")
  public async getOne(@Req() req: Request, @Res() res: Response) {
    const { id } = req.params
    const character = await this.characterService.getOne(Number(id))
    return res.json(character)
  }
}
