import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('licenses')
export class LicensesController {
  constructor() {}

  @Get(':id')
  getLicense(@Param('id') id: string) {
    return `This action returns all data from license ${id}`;
  }

  @Post()
  createLicense() {
    return 'This action creates a new license';
  }
}
