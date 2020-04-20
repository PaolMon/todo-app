import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {

  private logger = new Logger('App Services');

  constructor(@Inject('COMMAND_SERVICE') private client: ClientProxy) {}

  getHello(): string {
    return 'Hello World!';
  }

  sendCreate(something: string): void {
    this.logger.log('post ricevuta');
    this.client.emit<void>('create', something);
  }

  sendUpdate(something: string): void {
    this.logger.log('post ricevuta');
    this.client.emit<void>('update', something);
  }

  sendDelete(something: string): void {
    this.logger.log('post ricevuta');
    this.client.emit<void>('delete', something);
  }
}
