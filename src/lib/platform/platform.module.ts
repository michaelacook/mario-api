import { Module } from "@nestjs/common"
// import { SequelizeModule } from "@nestjs/sequelize"
import { DatabaseModule } from "../../database/database.module"
// import { Platform } from "./models/platform.model"
import { PlatformService } from "./providers/platform.service"
import { PlatformController } from "./controllers/platform.controller"
import { platformProviders } from "./platform.providers"

@Module({
  imports: [DatabaseModule],
  // exports: [SequelizeModule],
  controllers: [PlatformController],
  providers: [PlatformService, ...platformProviders],
})
export class PlatformModule {}
