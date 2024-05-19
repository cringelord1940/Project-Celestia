import { Injectable } from '@nestjs/common'

@Injectable()
export class StargateService {
  getHello(): string {
    return 'Hello World!'
  }
}
