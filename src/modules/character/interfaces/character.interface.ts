import { IDataStoreService } from "src/core/interfaces/data-store-service.interface"

export interface ICharacterService extends IDataStoreService {
  getAssociatedGames(id: number): Promise<any>
  getImage(id: number): Promise<any>
}
