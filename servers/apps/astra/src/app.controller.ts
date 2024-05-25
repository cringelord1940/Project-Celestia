import { Controller, Get } from '@nestjs/common'
import { ROUTES } from '@astra/routes'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(ROUTES.hello)
  hello(): string {
    return this.appService.hello()
  }
}
