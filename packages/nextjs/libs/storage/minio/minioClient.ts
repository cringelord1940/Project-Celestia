import * as minio from 'minio'
// import { env } from '@global/env.mjs'

const MinioClient: minio.Client = new minio.Client({
  endPoint: process.env.S3_UPLOAD_ENDPOINT,
  useSSL: true,
  accessKey: process.env.S3_UPLOAD_KEY,
  secretKey: process.env.S3_UPLOAD_SECRET,
})

const MinioClientFunc = (env): minio.Client =>
  new minio.Client({
    endPoint: env.S3_UPLOAD_ENDPOINT,
    useSSL: true,
    accessKey: env.S3_UPLOAD_KEY,
    secretKey: env.S3_UPLOAD_SECRET,
  })

export { MinioClient, MinioClientFunc }
