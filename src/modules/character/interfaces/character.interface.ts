import { IDataStoreService } from "src/core/interfaces/data-store-service.interface"

export interface ICharacterService extends IDataStoreService {
  getAssociatedGames(id): Promise<any>
  getImage(id): Promise<any>
}
