import {Controller, Get, NotFoundException, Param} from '@nestjs/common';
import { AppService } from './app.service';
import {TodolistEntity} from "./entities/Todolist.entity";
import { TodoModel } from './models/todo.dto.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/search')
  getList(): any {
      const result: Promise<TodoModel[]> = this.appService.getList();
      return result.then(value => {
          console.log('resolved', value);
          return value;
      }).catch(error => {
          console.log('rejected', error);
          throw NotFoundException;
      });
  }
}
