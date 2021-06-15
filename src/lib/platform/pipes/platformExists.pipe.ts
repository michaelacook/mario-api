import {
  PipeTransform,
  Injectable,
  Inject,
  ArgumentMetadata,
  NotFoundException,
} from "@nestjs/common"
import { PlatformService } from "../providers/platform.service"

@Injectable()
export class PlatformExistsPipe implements PipeTransform {
  constructor(
    @Inject(PlatformService)
    private readonly platformService: PlatformService,
  ) {}

  public async transform(value: number, metadata: ArgumentMetadata) {
    const platform = await this.platformService.getOne(value)

    if (!platform) {
      throw new NotFoundException()
    }

    return value
  }
}
