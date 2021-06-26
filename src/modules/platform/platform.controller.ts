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
import { QueryOptions } from "./types/query-options.type"
import { CreatePlatformDto } from "./dto/create-platform.dto"
import { PlatformExistsPipe } from "./pipes/platform-exists.pipe"
import { PLATFORM_SERVICE } from "./constants"
import { IDataStoreService } from "src/core/interfaces/data-store-service.interface"

@Controller("platforms")
export class PlatformController {
  constructor(
    @Inject(PLATFORM_SERVICE)
    private readonly platformService: IDataStoreService,
  ) {}

  @Get("/")
  public async getAll(@Query() query: QueryOptions, @Res() res: Response) {
    const platforms = await this.platformService.getAll(query)
    return res.json(platforms)
  }

  @Get("/:id")
  public async getOne(
    @Param("id", ParseIntPipe, PlatformExistsPipe) id: number,
    @Query() query: QueryOptions,
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
    @Param("id", ParseIntPipe, PlatformExistsPipe) id: number,
    @Body() updatePlatform: CreatePlatformDto,
    @Res() res: Response,
  ) {
    const platform = await this.platformService.update(id, updatePlatform)
    return res.json(platform)
  }

  @Delete("/:id")
  public async delete(
    @Param("id", ParseIntPipe, PlatformExistsPipe) id: number,
    @Res() res: Response,
  ) {
    const platformId = await this.platformService.delete(id)
    return res.json(platformId)
  }
}
