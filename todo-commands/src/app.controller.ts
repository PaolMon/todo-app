import { Inject, Body, Controller, Get, Logger, Post, BadRequestException } from '@nestjs/common';
import { TodoModel } from './models/todo.dto.model';
import { ClientProxy } from "@nestjs/microservices";
import { v4 as uuidv4 } from 'uuid';
import { isValidV4 } from './utils';

@Controller()
export class AppController {

  private logger = new Logger('App Controller');

  constructor(@Inject('COMMAND_SERVICE') private client: ClientProxy) {}

  @Get()
  getHello(): string {
    return('<h1>OK, it works!</h1>');
  }

  @Post('/create')
  create(@Body() todo: TodoModel): TodoModel {
    this.logger.log('RICEVUTO:' + JSON.stringify(todo));
    todo.uuid = uuidv4();
    this.client.emit<void>('createTodo', todo);
    this.logger.log('richiesta post ricevuta[/create]: '+todo);
    return(todo);
  }

  @Post('/update')
  update(@Body() todo: TodoModel): void {
    this.logger.log('RICEVUTO:' + JSON.stringify(todo));
    if(isValidV4(todo.uuid)) {
      this.client.emit<void>('updateTodo', todo);
      this.logger.log('richiesta post ricevuta[/update]: '+todo);
    } else {
      throw new BadRequestException();
    }
  }

  @Post('/delete')
  delete(@Body() todo: TodoModel): void {
    this.logger.log('RICEVUTO:' + JSON.stringify(todo));
    if(isValidV4(todo.uuid)) {
      this.client.emit<void>('removeTodo', todo);
      this.logger.log('richiesta post ricevuta[/delete]: '+todo);
    } else {
      throw new BadRequestException();
    }
  }
}




