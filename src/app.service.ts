import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! This is the modified data';
  }

  healthCheck(): string {
    return `I'm still alive, ahihi`;
  }
}
