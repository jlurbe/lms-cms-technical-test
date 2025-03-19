import { NestFactory } from '@nestjs/core';
import { KafkaRedisConsumerModule } from './kafka-redis-consumer.module';

async function bootstrap() {
  const app = await NestFactory.create(KafkaRedisConsumerModule);
  await app.listen(process.env.port ?? 3002);
}
bootstrap();
