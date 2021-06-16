import { Module } from "@nestjs/common"
import { DatabaseModule } from "../../core/database/database.module"
import { PlatformService } from "./platform.service"
import { PlatformController } from "./platform.controller"
import { platformProviders } from "./platform.providers"

@Module({
  imports: [DatabaseModule],
  controllers: [PlatformController],
  providers: [PlatformService, ...platformProviders],
})
export class PlatformModule {}
