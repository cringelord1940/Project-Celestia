import {
  Controller,
  UseInterceptors,
  Post,
  Get,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
} from '@nestjs/common'
import {
  FileInterceptor,
  FileFieldsInterceptor,
} from '@nestjs/platform-express'
import { Express } from 'express'
import { ROUTES } from '@stella/routes'
import { UploadService } from './upload.service'

@Controller(ROUTES.upload.root)
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Get()
  sayStatus() {
    return this.uploadService.getStatus()
  }

  @Post(ROUTES.upload.single)
  @UseInterceptors(FileInterceptor('file'))
  uploadSingleFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1000 }),
          new FileTypeValidator({ fileType: 'image/jpeg' }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    console.log(file)
  }

  @Post(ROUTES.upload.multiple)
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'avatar', maxCount: 1 },
      { name: 'background', maxCount: 1 },
    ]),
  )
  uploadMultipleFiles(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1000 }),
          new FileTypeValidator({ fileType: 'image/jpeg' }),
        ],
      }),
    )
    files: {
      avatar?: Express.Multer.File[]
      background?: Express.Multer.File[]
    },
  ) {
    console.log(files)
  }
}
