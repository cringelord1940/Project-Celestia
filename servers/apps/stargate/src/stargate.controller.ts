import { Controller, Get } from '@nestjs/common'
import { StargateService } from './stargate.service'

@Controller()
export class StargateController {
  constructor(private readonly gatewayService: StargateService) {}

  @Get()
  getHello(): string {
    return this.gatewayService.getHello()
  }
}
