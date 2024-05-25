import { Test, TestingModule } from '@nestjs/testing'
import { StargateController } from './stargate.controller'
import { StargateService } from './stargate.service'

describe('GatewayController', () => {
  let gatewayController: StargateController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [StargateController],
      providers: [StargateService],
    }).compile()

    gatewayController = app.get<StargateController>(StargateController)
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(gatewayController.getHello()).toBe('Hello World!')
    })
  })
})
