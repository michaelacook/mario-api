import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/sequelize"
import { ICharacterService } from "../interfaces/characterService.interface"
import { Character } from "../models/character.model"

@Injectable()
export class CharacterService implements ICharacterService {
  constructor(@InjectModel(Character) private gameModel) {}
}
