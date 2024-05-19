import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(
    {
      name: 'TheIceJi COSMOS',
      env: process.env.NODE_ENV,
      status: 'ok',
      isRunning: true,
    },
    { status: 200 },
  )
}
