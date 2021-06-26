import { IDataStoreService } from "src/core/interfaces/data-store-service.interface"

export interface IGameService extends IDataStoreService {
  getAssociatedPlatform(id: number, ...args): Promise<any>
  addCharacter(payload, ...args): Promise<any>
}
