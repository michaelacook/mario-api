import {
  PipeTransform,
  Injectable,
  Inject,
  ArgumentMetadata,
  NotFoundException,
} from "@nestjs/common"
import { GameService } from "../game.service"

@Injectable()
export class GameExistsPipe implements PipeTransform {
  constructor(
    @Inject(GameService)
    private readonly gameService: GameService,
  ) {}

  public async transform(value: number, metadata: ArgumentMetadata) {
    const game = await this.gameService.getOne(value)

    if (!game) {
      throw new NotFoundException()
    }

    return value
  }
}
