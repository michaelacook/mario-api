import {
  Controller,
  Get,
  Inject,
  Res,
  Query,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Delete,
  Put,
} from "@nestjs/common"
import { Response } from "express"
import { IPlatformService } from "../interfaces/platformService.interface"
import { QueryOptionsDto } from "../dto/queryOptions.dto"
import { CreatePlatformDto } from "../dto/createPlatform.dto"

@Controller("platforms")
export class PlatformController {
  constructor(
    @Inject("PLATFORM_SERVICE")
    private readonly platformService: IPlatformService,
  ) {}

  @Get("/")
  public async getAll(@Query() query: QueryOptionsDto, @Res() res: Response) {
    const platforms = await this.platformService.getAll(query)
    return res.json(platforms)
  }

  @Get("/:id")
  public async getOne(
    @Param("id", ParseIntPipe) id: number,
    @Query() query: QueryOptionsDto,
    @Res() res: Response,
  ) {
    const platform = await this.platformService.getOne(id, query)
    return res.json(platform)
  }

  @Post("/")
  public async createPlatform(
    @Body() createPlatformDto: CreatePlatformDto,
    @Res() res: Response,
  ) {
    const platform = await this.platformService.create(createPlatformDto)
    return res.json(platform)
  }

  @Put("/:id")
  public async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updatePlatform: CreatePlatformDto,
    @Res() res: Response,
  ) {
    const platform = await this.platformService.update(id, updatePlatform)
    return res.json(platform)
  }

  @Delete("/:id")
  public async delete(
    @Param("id", ParseIntPipe) id: number,
    @Res() res: Response,
  ) {
    const platformId = await this.platformService.delete(id)
    return res.json(platformId)
  }
}
