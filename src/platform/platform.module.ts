import { Module } from "@nestjs/common"
import { SequelizeModule } from "@nestjs/sequelize"
import { Platform } from "./models/platform.model"
import { PlatformService } from "./providers/platform.service"
import { PlatformController } from "./controllers/platform.controller"

@Module({
  imports: [SequelizeModule.forFeature([Platform])],
  exports: [SequelizeModule],
  controllers: [PlatformController],
  providers: [
    {
      provide: "PLATFORM_SERVICE",
      useClass: PlatformService,
    },
  ],
})
export class PlatformModule {}
