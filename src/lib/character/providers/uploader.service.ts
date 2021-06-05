import { Injectable } from "@nestjs/common"
import AWS from "aws-sdk"

@Injectable()
export class Uploader {
  private id: string
  private secret: string
  private bucketName: string
  private s3

  constructor() {
    this.id = process.env.S3_ACCESS_KEY_ID
    this.secret = process.env.S3_SECRET_ACCESS_KEY
    this.bucketName = process.env.S3_BUCKET_NAME
    this.s3 = new AWS.S3({
      accessKeyId: this.id,
      secretAccessKey: this.secret,
    })
  }

  public async upload(file, contentType?: string) {
    try {
      const params = {
        Bucket: this.bucketName,
        Key: file.originalname,
        Body: file.buffer,
      }

      if (contentType) {
        params["ContentType"] = contentType
      }

      const response = await this.s3.upload(params).promise()
      return response.Location
    } catch (err) {
      return Promise.reject(err)
    }
  }
}
