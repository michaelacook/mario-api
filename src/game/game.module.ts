import { Module } from "@nestjs/common"
import { SequelizeModule } from "@nestjs/sequelize"
import { Game } from "./models/game.model"
import { GameController } from "./controllers/game.controller"
import { GameService } from "./providers/game.service"

@Module({
  imports: [SequelizeModule.forFeature([Game])],
  exports: [SequelizeModule],
  controllers: [GameController],
  providers: [
    {
      provide: "GAME_SERVICE",
      useClass: GameService,
    },
  ],
})
export class GameModule {}
