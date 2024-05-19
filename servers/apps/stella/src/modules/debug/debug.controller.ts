import { Controller, Get } from '@nestjs/common'
import { ROUTES } from '@stella/routes'
import { DebugService } from './debug.service'

@Controller(ROUTES.debug.root)
export class DebugController {
  constructor(private readonly debugService: DebugService) {}

  @Get(ROUTES.debug.sentry)
  debugSentry(): void {
    return this.debugService.debugSentry()
  }
}
