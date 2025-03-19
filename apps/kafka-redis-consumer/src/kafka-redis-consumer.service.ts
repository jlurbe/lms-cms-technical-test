import { Injectable } from '@nestjs/common';

@Injectable()
export class KafkaRedisConsumerService {
  getHello(): string {
    return 'Hello World!';
  }
}
