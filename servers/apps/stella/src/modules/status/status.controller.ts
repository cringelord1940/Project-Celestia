import { Controller, Get, Res } from '@nestjs/common'
import type { Response } from 'express'
import { StatusService } from './status.service'
import { ROUTES } from '@stella/routes'

@Controller(ROUTES.status.root)
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Get()
  root(@Res() response: Response): void {
    return this.statusService.getStatus(response)
  }

  @Get(ROUTES.status.health)
  sayHealth() {
    return this.statusService.getHealth()
  }
}
