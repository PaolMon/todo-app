import {Injectable, Inject, NotFoundException} from '@nestjs/common';
import {Repository} from 'typeorm';
import { TodolistEntity } from './entities/Todolist.entity'
import {InjectRepository} from "@nestjs/typeorm";
import {TodoModel} from './models/todo.dto.model'
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {

  constructor(@InjectRepository(TodolistEntity) private todoRepository: Repository<TodolistEntity>
            , @Inject('EVENT_SERVICE') private client: ClientProxy) {}

  getHello(): string {
    return 'Hello World!';
  }

  async update(data: TodoModel) {
    const todo: TodolistEntity = await this.todoRepository.findOne({
      where: {"uuid": data.uuid},
      order: {"_id": "DESC"}
    })
    if (todo == null || typeof todo == 'undefined') {
      throw NotFoundException;
    }
    todo._id = null;
    todo.title = data.title;
    todo.percentage = data.percentage;
    if (todo.percentage === 100) {
      todo.done = true;
    } else { 
      todo.done = false; 
    }
    await this.todoRepository.create(todo).save();

    this.client.emit<void>('updatedTodo', data);
  }
  
  
  async delete(data: TodoModel) {
    const todo: TodolistEntity = await this.todoRepository.findOne({
      where: {"uuid": data.uuid},
      order: {"_id": "DESC"}
    })
    if (todo == null || typeof todo == 'undefined') {
      throw NotFoundException;
    }
    todo.deleted = true;
    todo._id = null;
    await this.todoRepository.create(todo).save();

    this.client.emit<void>('deletedTodo', data);
  }


  async insert(data: TodoModel) {
    const todo: TodolistEntity = await this.todoRepository.create(data).save();

    this.client.emit<void>('updatedTodo', data);
  }

}
