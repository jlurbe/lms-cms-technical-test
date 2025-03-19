import { Module } from '@nestjs/common';
import { ContentsController } from './contents.controller';

@Module({
  imports: [],
  controllers: [ContentsController],
  providers: [],
})
export class ContentsModule {}
