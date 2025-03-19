import { Module } from '@nestjs/common';
import { LicensesController } from './licenses.controller';

@Module({
  imports: [],
  controllers: [LicensesController],
  providers: [],
})
export class LicencesModule {}
