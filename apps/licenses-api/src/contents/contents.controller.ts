import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('contents')
export class ContentsController {
  constructor() {}

  @Get(':id')
  getContent(@Param('id') id: string) {
    return `This action returns the data of the content with id ${id}`;
  }

  @Post()
  createContent() {
    return 'This action creates a new content';
  }
}
