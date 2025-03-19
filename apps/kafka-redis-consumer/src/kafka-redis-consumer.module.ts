import { Module } from '@nestjs/common';
import { KafkaRedisConsumerController } from './kafka-redis-consumer.controller';
import { KafkaRedisConsumerService } from './kafka-redis-consumer.service';

@Module({
  imports: [],
  controllers: [KafkaRedisConsumerController],
  providers: [KafkaRedisConsumerService],
})
export class KafkaRedisConsumerModule {}
