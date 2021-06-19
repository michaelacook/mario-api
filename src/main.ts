import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { ValidationPipe } from "@nestjs/common"

import * as dotenv from "dotenv"
dotenv.config({ path: __dirname + "/.env" })

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(process.env.PORT || 5000)
}
bootstrap()
