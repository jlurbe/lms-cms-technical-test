import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('digital-programs')
export class DigitalProgramsController {
  constructor() {}

  @Get(':id')
  getDigitalProgram(@Param('id') id: string) {
    return `This action returns the data of the digital program with id ${id}`;
  }

  @Get(':id/contents')
  getContentsByProgramId(@Param('id') id: string) {
    return `This action returns all contents from digital program with id ${id}`;
  }

  @Post()
  createDigitalProgram() {
    return 'This action creates a new digital program';
  }
}
