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
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common"
import { FileInterceptor } from "@nestjs/platform-express"
import { Express, Response } from "express"
import { ICharacterService } from "../interfaces/characterService.interface"
import { CharacterImageUploader } from "../providers/characterImageUploader"
import { QueryOptionsDto } from "../dto/queryOptions.dto"
import { CreateCharacterDto } from "../dto/createCharacter.dto"
import { UpdateCharacterDto } from "../dto/updateCharacter.dto"

@Controller("characters")
export class CharacterController {
  constructor(
    @Inject("CHARACTER_SERVICE")
    private readonly characterService: ICharacterService,
    @Inject(CharacterImageUploader)
    private readonly characterImageUploader: CharacterImageUploader,
  ) {}

  @Get("/")
  public async getAll(@Query() query: QueryOptionsDto, @Res() res: Response) {
    const characters = await this.characterService.getAll(query)
    return res.json(characters)
  }

  @Get("/:id")
  public async getOne(
    @Param("id", ParseIntPipe) id: number,
    @Query() query: QueryOptionsDto,
    @Res() res: Response,
  ) {
    const character = await this.characterService.getOne(id, query)

    if (character) {
      return res.json(character)
    }

    throw new HttpException("Not Found", HttpStatus.NOT_FOUND)
  }

  // this route needs middleware to verify a record exists for the id
  @Get("/:id/games")
  public async getCharacterGames(
    @Param("id", ParseIntPipe) id: number,
    @Res() res: Response,
  ) {
    const games = await this.characterService.getAssociatedGames(id)
    return res.json(games)
  }

  @Get("/:id/image")
  public async getImage(
    @Param("id", ParseIntPipe) id: number,
    @Res() res: Response,
  ) {
    const url = await this.characterService.getImage(id)

    if (url) {
      return res.redirect(url.image_url)
    }

    throw new HttpException("Not Found", HttpStatus.NOT_FOUND)
  }

  // this route needs middleware to verify that a record exists for the id
  @Post("/:id/image")
  @UseInterceptors(FileInterceptor("file"))
  public async upload(
    @UploadedFile() file: Express.Multer.File,
    @Param("id", ParseIntPipe) id: number,
    @Res() res: Response,
  ) {
    const character = await this.characterImageUploader.addImage(id, file)
    return res.json(character)
  }

  @Post("/")
  public async create(
    @Body() createCharDto: CreateCharacterDto,
    @Res() res: Response,
  ) {
    const character = await this.characterService.create(createCharDto)
    return res.status(201).json(character)
  }

  @Put("/:id")
  public async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateCharDto: UpdateCharacterDto,
    @Res() res: Response,
  ) {
    const character = await this.characterService.update(id, updateCharDto)
    return res.json(character)
  }

  @Delete("/:id")
  public async delete(
    @Param("id", ParseIntPipe) id: number,
    @Res() res: Response,
  ) {
    const deletedRecordId = await this.characterService.delete(id)
    return res.json(deletedRecordId)
  }
}
