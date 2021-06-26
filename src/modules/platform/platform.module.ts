import { Module } from "@nestjs/common"
import { DatabaseModule } from "../../core/database/database.module"
import { PlatformService } from "./platform.service"
import { PlatformController } from "./platform.controller"
import { platformProviders } from "./platform.providers"
import { PLATFORM_SERVICE } from "./constants"

@Module({
  imports: [DatabaseModule],
  controllers: [PlatformController],
  providers: [
    {
      provide: PLATFORM_SERVICE,
      useClass: PlatformService,
    },
    ...platformProviders,
  ],
})
export class PlatformModule {}
