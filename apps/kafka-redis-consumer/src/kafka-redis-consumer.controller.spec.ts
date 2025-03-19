import { Test, TestingModule } from '@nestjs/testing';
import { KafkaRedisConsumerController } from './kafka-redis-consumer.controller';
import { KafkaRedisConsumerService } from './kafka-redis-consumer.service';

describe('KafkaRedisConsumerController', () => {
  let kafkaRedisConsumerController: KafkaRedisConsumerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [KafkaRedisConsumerController],
      providers: [KafkaRedisConsumerService],
    }).compile();

    kafkaRedisConsumerController = app.get<KafkaRedisConsumerController>(KafkaRedisConsumerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(kafkaRedisConsumerController.getHello()).toBe('Hello World!');
    });
  });
});
