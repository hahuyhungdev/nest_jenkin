import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! This is my updated data';
  }

  healthCheck(): string {
    return `I'm still alive`;
  }
}
