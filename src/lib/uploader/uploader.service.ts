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

  /**
   * Upload a file to an AWS S3 bucket
   * @param {object} file
   * @param {String} contentType - HTTP content-type header
   * @returns {String} url location
   */
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

      const { Location } = await this.s3.upload(params).promise()
      return Location
    } catch (err) {
      return Promise.reject(err)
    }
  }
}
