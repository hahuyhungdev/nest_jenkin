import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! This is my updated data';
  }

  heathCheck(): string {
    return `I'm still alive`;
  }
}
