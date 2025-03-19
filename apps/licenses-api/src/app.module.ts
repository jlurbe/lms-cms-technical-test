import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LicencesModule } from './licenses/licences.module';
import { DigitalProgramsModule } from './digital-programs/digital-programs.module';
import { ContentsModule } from './contents/contents.module';

@Module({
  imports: [LicencesModule, DigitalProgramsModule, ContentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
