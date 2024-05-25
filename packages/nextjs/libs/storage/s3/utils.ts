import {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
  PutBucketCorsCommand,
  GetObjectCommandInput,
  HeadObjectCommand,
  CreateMultipartUploadCommand,
  UploadPartCommand,
  CompleteMultipartUploadCommand,
  AbortMultipartUploadCommand,
  DeleteObjectCommand,
} from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { getS3Client } from './s3Client'

export async function setCors(s3: S3Client | null = null) {
  if (!s3) s3 = await getS3Client()
  await s3.send(
    new PutBucketCorsCommand({
      Bucket: process.env.S3_UPLOAD_BUCKET,
      CORSConfiguration: {
        CORSRules: [
          {
            AllowedHeaders: ['content-type'],
            ExposeHeaders: ['ETag'],
            AllowedMethods: ['PUT', 'GET'],
            AllowedOrigins: process.env.S3_ORIGINS
              ? process.env.S3_ORIGINS
              : ['*'],
          },
        ],
      },
    }),
  )
}

export async function getCustomPutUrl(
  bucket: string,
  key: string,
  s3: S3Client | null = null,
) {
  if (!s3) s3 = getS3Client()
  const url = await getSignedUrl(
    s3,
    new PutObjectCommand({ Bucket: bucket, Key: key }),
    {
      expiresIn: UPLOAD_EXPIRATION,
    },
  )
  return { url, bucket, key }
}

export function deleteObject(
  bucket: string,
  key: string,
  s3: S3Client | null = null,
) {
  if (!s3) s3 = getS3Client()
  return s3.send(
    new DeleteObjectCommand({
      Bucket: bucket,
      Key: key,
    }),
  )
}

const DOWNLOAD_EXPIRATION = 60 * 60 * 24 // 24 hours
const UPLOAD_EXPIRATION = 60 * 60 * 12 // 12 hours
const FILE_CHUNK_SIZE = 100 * 1024 * 1024 // 100 MB
export async function getMultipartPutUrl(
  key: string,
  size: number,
  s3: S3Client | null = null,
) {
  if (!s3) s3 = getS3Client()

  const bucket = process.env.S3_UPLOAD_BUCKET
  const { UploadId } = await s3.send(
    new CreateMultipartUploadCommand({ Bucket: bucket, Key: key }),
  )

  const promises = []
  for (let i = 0; i < Math.ceil(size / FILE_CHUNK_SIZE); i++) {
    promises.push(
      getSignedUrl(
        s3,
        new UploadPartCommand({
          Bucket: bucket,
          Key: key,
          UploadId,
          PartNumber: i + 1,
        }),
        { expiresIn: UPLOAD_EXPIRATION },
      ).then((url) => ({ url, partNumber: i + 1 })),
    )
  }
  const urls = await Promise.all(promises)

  return { urls, bucket, key, uploadId: UploadId }
}

interface MultipartUploadPart {
  ETag: string
  PartNumber: number
}
export function completeMultipartUpload(
  bucket: string,
  key: string,
  uploadId: string,
  parts: MultipartUploadPart[],
  s3: S3Client | null = null,
) {
  if (!s3) s3 = getS3Client()
  return s3.send(
    new CompleteMultipartUploadCommand({
      Bucket: bucket,
      Key: key,
      UploadId: uploadId,
      MultipartUpload: { Parts: parts },
    }),
  )
}

export async function abortMultipartUpload(
  bucket: string,
  key: string,
  uploadId: string,
  s3: S3Client | null = null,
) {
  if (!s3) s3 = getS3Client()
  await s3.send(
    new AbortMultipartUploadCommand({
      Bucket: bucket,
      Key: key,
      UploadId: uploadId,
    }),
  )
}

type GetObjectOptions = {
  s3?: S3Client | null
  expiresIn?: number
  fileName?: string
  bucket?: string
}

const s3Host = new URL(process.env.S3_UPLOAD_ENDPOINT).host
export function parseKey(fileUrl: string) {
  const url = new URL(fileUrl)
  const bucketInPath = url.hostname === s3Host
  if (bucketInPath) {
    const pathParts = url.pathname.split('/')
    return {
      key: pathParts.slice(2).join('/'),
      bucket: pathParts[1],
    }
  }

  return {
    key: url.pathname.split('/').slice(1).join('/'),
    bucket: url.hostname.replace('.' + s3Host, ''),
  }
}

export async function getGetUrl(
  s3Url: string,
  {
    s3,
    expiresIn = DOWNLOAD_EXPIRATION,
    fileName,
    bucket,
  }: GetObjectOptions = {},
) {
  if (!s3) s3 = getS3Client()

  const { key: parsedKey, bucket: parsedBucket } = parseKey(s3Url)
  if (!bucket) bucket = parsedBucket ?? process.env.S3_UPLOAD_BUCKET
  const command: GetObjectCommandInput = {
    Bucket: bucket,
    Key: parsedKey,
  }
  if (fileName)
    command.ResponseContentDisposition = `attachment; filename="${fileName}"`

  const url = await getSignedUrl(s3, new GetObjectCommand(command), {
    expiresIn,
  })
  return { url, bucket, key: parsedKey }
}

export async function checkFileExists(key: string, s3: S3Client | null = null) {
  if (!s3) s3 = getS3Client()

  try {
    const { key: parsedKey, bucket: parsedBucket } = parseKey(key)
    await s3.send(
      new HeadObjectCommand({
        Key: parsedKey,
        Bucket: parsedBucket ?? process.env.S3_UPLOAD_BUCKET,
      }),
    )
  } catch {
    return false
  }

  return true
}
