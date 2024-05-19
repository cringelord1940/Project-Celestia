import { Injectable, Res } from '@nestjs/common'
import type { Response } from 'express'

@Injectable()
export class StatusService {
  getHealth() {
    return { status: 'ok' }
  }

  getStatus(@Res() response: Response): void {
    response.status(200).json({
      name: 'TheIceJi NOVA',
      env: process.env.NODE_ENV,
      status: 'ok',
      isRunning: true,
    })
  }
}
