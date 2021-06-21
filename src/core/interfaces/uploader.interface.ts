import { File } from "../types/file.type"

export interface IUploader {
  upload(file: File, contentType?: string): any
}
