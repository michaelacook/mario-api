import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { ValidationPipe } from "@nestjs/common"
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger"

import * as dotenv from "dotenv"
dotenv.config({ path: __dirname + "/.env" })

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  app.useGlobalPipes(new ValidationPipe())
  const config = new DocumentBuilder()
    .setTitle("The Mario API")
    .setDescription(
      "A basic REST API for managing Mario Bros franchise data. The API returns data related to Mario characters, games, and their console platforms.",
    )
    .setVersion("1.0")
    .addTag("Mario")
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("api", app, document)
  await app.listen(process.env.PORT || 5000)
}
bootstrap()
