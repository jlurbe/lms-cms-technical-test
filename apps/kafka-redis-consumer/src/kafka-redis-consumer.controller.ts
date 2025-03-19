import { Controller, Get } from '@nestjs/common';
import { KafkaRedisConsumerService } from './kafka-redis-consumer.service';

@Controller()
export class KafkaRedisConsumerController {
  constructor(private readonly kafkaRedisConsumerService: KafkaRedisConsumerService) {}

  @Get()
  getHello(): string {
    return this.kafkaRedisConsumerService.getHello();
  }
}
