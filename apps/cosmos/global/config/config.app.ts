export const app = {
  NAME: 'TheIceJi Cosmos',
  VERSION: '2024.5.1601',
  UPDATE_DATE: 'May 16, 2024',
  SENTRY: {
    dsn: process.env.NEXT_PUBLIC_APP_COSMOS_SENTRY_DNS,
  },
  Dependencies: {
    Celestia: '0.8b',
    React: '18.3.1',
    NextJs: '14.2.3',
    ThreeJs: 'r164.1',
  },
  Functions: {
    useThree: true,
    useAudio: true,
    useAuth: true,
    useWeb3: true,
  },
  user: {
    rateSwap: 59.2,
  },
  s3: {
    bucketName: process.env.NEXT_PUBLIC_S3_UPLOAD_ENDPOINT ?? 'celestia',
    endpoint: process.env.NEXT_PUBLIC_S3_DOWNLOAD_ENDPOINT,
  },
}
