import { CreatePlatformDto } from "../dto/createPlatform.dto"

export interface IPlatformService {
  getAll(queryOptions?: object)
  getOne(id: number, queryOptions?: object)
  create(payload: CreatePlatformDto)
  delete(id: number)
}
