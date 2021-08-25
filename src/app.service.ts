import { Injectable } from "@nestjs/common"

@Injectable()
export class AppService {
  public greeting(): string {
    return "Welcome to the Mario API! View the documentation here: <https://supermario-api.herokuapp.com/api>"
  }
}
