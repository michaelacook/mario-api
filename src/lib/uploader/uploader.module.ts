import { Module } from "@nestjs/common"
import { Uploader } from "./uploader.service"

@Module({
  exports: [Uploader],
  providers: [Uploader],
})
export class UploaderModule {}
