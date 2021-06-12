import {
  PipeTransform,
  Injectable,
  Inject,
  ArgumentMetadata,
  NotFoundException,
} from "@nestjs/common"
import { IGameService } from "../interfaces/gameService.interface"

@Injectable()
export class GameExistsPipe implements PipeTransform {
  constructor(
    @Inject("GAME_SERVICE")
    private readonly gameService: IGameService,
  ) {}

  public async transform(value: number, metadata: ArgumentMetadata) {
    const game = await this.gameService.getOne(value)

    if (!game) {
      throw new NotFoundException()
    }

    return value
  }
}
