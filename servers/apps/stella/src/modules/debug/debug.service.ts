import { Injectable } from '@nestjs/common'

@Injectable()
export class DebugService {
  debugSentry(): void {
    throw new Error('Debug: Throw error from TheIceJi-NOVA')
  }
}
