import { NestFactory } from '@nestjs/core';
import { UsersApiModule } from './users-api.module';

async function bootstrap() {
  const app = await NestFactory.create(UsersApiModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
