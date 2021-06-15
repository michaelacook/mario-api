import {
  Body,
  Controller,
  Get,
  Res,
  Query,
  Param,
  Inject,
  ParseIntPipe,
  Post,
  Put,
  Delete,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common"
import { FileInterceptor } from "@nestjs/platform-express"
import { Express, Response } from "express"
import { CharacterService } from "../providers/character.service"
import { CharacterImageUploader } from "../providers/characterImageUploader.service"
import { QueryOptionsDto } from "../dto/queryOptions.dto"
import { CreateCharacterDto } from "../dto/createCharacter.dto"
import { UpdateCharacterDto } from "../dto/updateCharacter.dto"
import { CharacterExistsPipe } from "../pipes/characterExists.pipe"

@Controller("characters")
export class CharacterController {
  constructor(
    @Inject(CharacterService)
    private readonly characterService: CharacterService,
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
    @Param("id", ParseIntPipe, CharacterExistsPipe) id: number,
    @Query() query: QueryOptionsDto,
    @Res() res: Response,
  ) {
    const character = await this.characterService.getOne(id, query)

    return res.json(character)
  }

  @Get("/:id/games")
  public async getCharacterGames(
    @Param("id", ParseIntPipe, CharacterExistsPipe) id: number,
    @Res() res: Response,
  ) {
    const games = await this.characterService.getAssociatedGames(id)

    return res.json(games)
  }

  @Get("/:id/image")
  public async getImage(
    @Param("id", ParseIntPipe, CharacterExistsPipe) id: number,
    @Res() res: Response,
  ) {
    const url = await this.characterService.getImage(id)

    return res.json(url)
  }

  @Post("/:id/image")
  @UseInterceptors(FileInterceptor("file"))
  public async upload(
    @UploadedFile() file: Express.Multer.File,
    @Param("id", ParseIntPipe, CharacterExistsPipe) id: number,
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
    @Param("id", ParseIntPipe, CharacterExistsPipe) id: number,
    @Body() updateCharDto: UpdateCharacterDto,
    @Res() res: Response,
  ) {
    const character = await this.characterService.update(id, updateCharDto)

    return res.json(character)
  }

  @Delete("/:id")
  public async delete(
    @Param("id", ParseIntPipe, CharacterExistsPipe) id: number,
    @Res() res: Response,
  ) {
    const deletedRecordId = await this.characterService.delete(id)

    return res.json(deletedRecordId)
  }
}
