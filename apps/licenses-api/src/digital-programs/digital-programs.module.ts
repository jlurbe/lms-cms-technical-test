import { Module } from '@nestjs/common';
import { DigitalProgramsController } from './digital-programs.controller';

@Module({
  imports: [],
  controllers: [DigitalProgramsController],
  providers: [],
})
export class DigitalProgramsModule {}
