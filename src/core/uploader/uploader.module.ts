import { Module } from "@nestjs/common"
import { Uploader } from "./uploader"

@Module({
  exports: [Uploader],
  providers: [Uploader],
})
export class UploaderModule {}
