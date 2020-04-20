import {Injectable, NotFoundException} from '@nestjs/common';
import {Repository} from 'typeorm';
import { TodolistEntity } from './entities/Todolist.entity'
import {InjectRepository} from "@nestjs/typeorm";
import {NewTodolistDTO, UpdateTodolistDTO} from './models/TodolistDTO'

@Injectable()
export class AppService {

  constructor(@InjectRepository(TodolistEntity) private todoRepository: Repository<TodolistEntity>) {}

  getHello(): string {
    return 'Hello World!';
  }

  async update(data: UpdateTodolistDTO) {
    const todo: TodolistEntity = await this.todoRepository.findOne({
      where: {"uuid": data.uuid},
      order: {"_id": "DESC"}
    })
    if (todo == null || typeof todo == 'undefined') {
      throw NotFoundException;
    }
    if (typeof data.task != 'undefined' || data.task != null || data.task != "") {
      todo.task = data.task;
    }
    if (data.task != null) {
      todo.done = data.done;
    }
    todo._id = null;
    await this.todoRepository.create(todo).save();
  }

  async delete(data: UpdateTodolistDTO) {
    const todo: TodolistEntity = await this.todoRepository.findOne({
      where: {"uuid": data.uuid},
      order: {"_id": "DESC"}
    })
    if (todo == null || typeof todo == 'undefined') {
      throw NotFoundException;
    }
    console.log(todo);
    console.log(typeof todo);
    todo.deleted = true;
    todo._id = null;
    await this.todoRepository.create(todo).save();
    console.log(todo)
  }

  async insert(data: NewTodolistDTO) {
    const todo: TodolistEntity = await this.todoRepository.create(data);
    await todo.save();
    console.log(todo)
  }


}
