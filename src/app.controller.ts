import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { UseInterceptors, UploadedFile } from '@nestjs/common';
import { extname } from 'path';

@Controller('notes')
export class AppController {
  constructor(private appService: AppService) {}
  @Get()
  getNotes() {
    return this.appService.getNotes();
  }
  @Post()
  createNote(@Body() body: any) {
    return this.appService.createNote(body);
  }

  @Post('products')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({ destination: './production/pics' }),
    }),
  )
  create(@UploadedFile() file: Express.Multer.File) {
    return {
      message: 'File uploaded successfully',
      filename: file.filename,
      path: file.path,
    };
  }
}
