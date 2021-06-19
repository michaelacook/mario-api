import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { GameModule } from "./modules/game/game.module"
import { PlatformModule } from "./modules/platform/platform.module"
import { CharacterModule } from "./modules/character/character.module"
import { GameCharacterModule } from "./modules/game_character/game_character.module"
import { UploaderModule } from "./modules/uploader/uploader.module"
import { DatabaseModule } from "./core/database/database.module"

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GameModule,
    PlatformModule,
    CharacterModule,
    GameCharacterModule,
    UploaderModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

/*
https://github.com/onwuvic/nest-blog-api

https://docs.nestjs.com/recipes/sql-sequelize

https://www.freecodecamp.org/news/build-web-apis-with-nestjs-beginners-guide/
*/
