import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {

  private logger = new Logger('App Controller');

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/create')
  create(@Body('msg') msg: string): void {
    this.appService.sendCreate(msg);
    this.logger.log('richiesta post ricevuta');
  }

  @Post('/update')
  update(@Body('msg') msg: string): void {
    this.appService.sendUpdate(msg);
    this.logger.log('richiesta post ricevuta');
  }

  @Post('/delete')
  delete(@Body('msg') msg: string): void {
    this.appService.sendDelete(msg);
    this.logger.log('richiesta post ricevuta');
  }
}




