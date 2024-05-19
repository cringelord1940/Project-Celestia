export const app = {
  NAME: 'TheIceJi Nexus',
  VERSION: '2024.3.1301',
  UPDATE_DATE: 'Mar 13, 2024',
  SENTRY: {
    dsn: process.env.NEXT_PUBLIC_APP_NEXUS_SENTRY_DNS,
  },
  Dependencies: {
    Celestia: '1.0b',
    React: '18.2.0',
    NextJs: '14.1.3',
    ThreeJs: 'r162',
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
