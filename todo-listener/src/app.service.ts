import {Injectable, NotFoundException} from '@nestjs/common';
import {Repository} from 'typeorm';
import { TodolistEntity } from './entities/Todolist.entity'
import {InjectRepository} from "@nestjs/typeorm";
import {NewTodolistDTO, UpdateTodolistDTO, InsertNewTodolistDTO, DeleteTodolistDTO} from './models/TodolistDTO'
import { v4 as uuidv4 } from 'uuid';

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
    if (data.done != null) {
      todo.done = data.done;
    }
    todo._id = null;
    await this.todoRepository.create(todo).save();
  }

  async delete(data: DeleteTodolistDTO) {
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
    let dataToInsert: InsertNewTodolistDTO = new InsertNewTodolistDTO(data, uuidv4());
    const todo: TodolistEntity = await this.todoRepository.create(dataToInsert);
    await todo.save();
    console.log(todo)
  }


}
