import { S3Client } from '@aws-sdk/client-s3'

const missingEnvs = (): string[] => {
  const keys = []
  if (!process.env.S3_UPLOAD_KEY) {
    keys.push('S3_UPLOAD_KEY')
  }
  if (!process.env.S3_UPLOAD_SECRET) {
    keys.push('S3_UPLOAD_SECRET')
  }
  if (!process.env.S3_UPLOAD_ENDPOINT) {
    keys.push('S3_UPLOAD_ENDPOINT')
  }
  if (!process.env.S3_UPLOAD_BUCKET) {
    keys.push('S3_UPLOAD_BUCKET')
  }
  return keys
}

export function getS3Client() {
  const missing = missingEnvs()
  if (missing.length > 0)
    throw new Error(`Next S3 Upload: Missing ENVs ${missing.join(', ')}`)

  return new S3Client({
    credentials: {
      accessKeyId: process.env.S3_UPLOAD_KEY,
      secretAccessKey: process.env.S3_UPLOAD_SECRET,
    },
    region: process.env.S3_UPLOAD_REGION,
    endpoint: process.env.S3_UPLOAD_ENDPOINT,
  })
}

export default getS3Client
