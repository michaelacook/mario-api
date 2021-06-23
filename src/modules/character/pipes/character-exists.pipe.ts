import {
  PipeTransform,
  Injectable,
  Inject,
  ArgumentMetadata,
  NotFoundException,
} from "@nestjs/common"
import { ICharacterService } from "../interfaces/character.interface"
import { CHARACTER_SERVICE } from "../constants"

@Injectable()
export class CharacterExistsPipe implements PipeTransform {
  constructor(
    @Inject(CHARACTER_SERVICE)
    private readonly characterService: ICharacterService,
  ) {}

  public async transform(value: number, metadata: ArgumentMetadata) {
    const character = await this.characterService.getOne(value)

    if (!character) {
      throw new NotFoundException()
    }

    return value
  }
}
