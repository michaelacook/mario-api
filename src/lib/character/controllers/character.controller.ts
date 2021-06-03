import {
  Body,
  Controller,
  Get,
  Res,
  Query,
  Param,
  Inject,
  HttpException,
  HttpStatus,
  ParseIntPipe,
  Post,
  Put,
  Delete,
} from "@nestjs/common"
import { Response } from "express"
import { ICharacterService } from "../interfaces/characterService.interface"
import { QueryOptionsDto } from "../dto/queryOptions.dto"
import { CreateCharacterDto } from "../dto/createCharacter.dto"
import { UpdateCharacterDto } from "../dto/updateCharacter.dto"

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

  @Get("/:id/games")
  public async getCharacterGames(
    @Param("id", ParseIntPipe) id: number,
    @Res() res: Response,
  ) {
    try {
      const games = await this.characterService.getAssociatedGames(id)
      return res.json(games)
    } catch (err) {
      console.log(err)
      throw new HttpException("Server Error", HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Post("/")
  public async create(
    @Body() createCharDto: CreateCharacterDto,
    @Res() res: Response,
  ) {
    try {
      const character = await this.characterService.create(createCharDto)
      return res.status(201).json(character)
    } catch (err) {
      console.log(err)
      throw new HttpException("Server Error", HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Put("/:id")
  public async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateCharDto: UpdateCharacterDto,
    @Res() res: Response,
  ) {
    try {
      const character = await this.characterService.update(id, updateCharDto)
      return res.json(character)
    } catch (err) {
      console.log(err)
      throw new HttpException("Server Error", HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Delete("/:id")
  public async delete(
    @Param("id", ParseIntPipe) id: number,
    @Res() res: Response,
  ) {
    try {
      const deletedRecordId = await this.characterService.delete(id)
      return res.json(deletedRecordId)
    } catch (err) {
      console.log(err)
      throw new HttpException("Server Error", HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
