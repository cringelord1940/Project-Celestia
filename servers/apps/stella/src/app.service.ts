import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  hello(): string {
    return 'Hello from TheIceJi Server (Celestia STELLA)'
  }
}
