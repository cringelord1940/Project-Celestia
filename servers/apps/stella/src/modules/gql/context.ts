import { Request, Response } from 'express'
import { PrismaService } from '@nexel/prisma'

export class IContext {
  req?: Request
  res?: Response
  prisma: PrismaService
}
