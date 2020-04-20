import {Controller, Get, NotFoundException, Param} from '@nestjs/common';
import { AppService } from './app.service';
import {TodolistEntity} from "./entities/Todolist.entity";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/search/:name')
  getList(@Param('name') name: string): any {
      const result: Promise<TodolistEntity[]> = this.appService.getList(name).then();
      return result.then(value => {
          console.log('resolved', value);
          return value;
      }).catch(error => {
          console.log('rejected', error);
          throw NotFoundException;
      });
  }
}
