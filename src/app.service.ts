import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  heathCheck(): string {
    return `I'm still alive`;
  }
}
