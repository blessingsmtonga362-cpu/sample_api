import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

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
}
