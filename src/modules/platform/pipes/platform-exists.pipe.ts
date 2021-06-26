import {
  PipeTransform,
  Injectable,
  Inject,
  ArgumentMetadata,
  NotFoundException,
} from "@nestjs/common"
import { IDataStoreService } from "src/core/interfaces/data-store-service.interface"
import { PLATFORM_SERVICE } from "../constants"

@Injectable()
export class PlatformExistsPipe implements PipeTransform {
  constructor(
    @Inject(PLATFORM_SERVICE)
    private readonly platformService: IDataStoreService,
  ) {}

  public async transform(value: number, metadata: ArgumentMetadata) {
    const platform = await this.platformService.getOne(value)

    if (!platform) {
      throw new NotFoundException()
    }

    return value
  }
}
