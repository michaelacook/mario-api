import { Injectable } from "@nestjs/common"
import AWS, { S3 } from "aws-sdk"

type File = {
  fieldname: string
  originalname: string
  encoding: string
  mimetype: string
  buffer: Buffer
  size: number
}

@Injectable()
export class Uploader {
  private bucketName: string
  private s3: S3

  constructor() {
    this.bucketName = process.env.S3_BUCKET_NAME
    this.s3 = new AWS.S3({
      accessKeyId: process.env.S3_ACCESS_KEY_ID,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    })
  }

  /**
   * Upload a file to an AWS S3 bucket
   * @param {object} file
   * @param {String} contentType - HTTP content-type header
   * @returns {String} url location
   */
  public async upload(file: File, contentType?: string) {
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
