import { Injectable } from "@nestjs/common"

@Injectable()
export class AppService {
  public greeting(): string {
    return "Welcome to the Mario API! View the documentation here: <https://github.com/michaelacook/mario-api#readme>"
  }
}
