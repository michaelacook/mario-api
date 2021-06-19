import {
  PipeTransform,
  Injectable,
  Inject,
  ArgumentMetadata,
  NotFoundException,
} from "@nestjs/common"
import { CharacterService } from "../character.service"

@Injectable()
export class CharacterExistsPipe implements PipeTransform {
  constructor(
    @Inject(CharacterService)
    private readonly characterService: CharacterService,
  ) {}

  public async transform(value: number, metadata: ArgumentMetadata) {
    const character = await this.characterService.getOne(value)

    if (!character) {
      throw new NotFoundException()
    }

    return value
  }
}
