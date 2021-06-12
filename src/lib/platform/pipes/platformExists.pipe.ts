import {
  PipeTransform,
  Injectable,
  Inject,
  ArgumentMetadata,
  NotFoundException,
} from "@nestjs/common"
import { IPlatformService } from "../interfaces/platformService.interface"

@Injectable()
export class PlatformExistsPipe implements PipeTransform {
  constructor(
    @Inject("PLATFORM_SERVICE")
    private readonly platformService: IPlatformService,
  ) {}

  public async transform(value: number, metadata: ArgumentMetadata) {
    const platform = await this.platformService.getOne(value)

    if (!platform) {
      throw new NotFoundException()
    }

    return value
  }
}
