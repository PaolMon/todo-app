import { Injectable } from '@nestjs/common';
import {TodolistEntity} from './entities/Todolist.entity'
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import { TodoModel } from './models/todo.dto.model';

@Injectable()
export class AppService {

  constructor(@InjectRepository(TodolistEntity) private todoRepository: Repository<TodolistEntity>) {}

  async getList(): Promise<TodoModel[]> {
    const userQb = await this.todoRepository
        .createQueryBuilder("uuid")
        .select("uuid.uuid")
        .where("uuid.deleted = :deleted", {deleted: true});

    const results: TodolistEntity[] = await this.todoRepository
        .createQueryBuilder("all")
        .innerJoinAndSelect("(SELECT  max(_id) as id, uuid from \"todo-list\" group by uuid)", "b", "b.id = all._id")
        .where("all.uuid NOT IN (" + userQb.getQuery() + ")")
        .setParameters(userQb.getParameters())
        .getMany();

    const returnee: TodoModel[] = results;

    return returnee;
  }

/*  async getList(name: string): Promise<TodolistEntity[]> {
    console.log('query for: '+name);
    const userQb = await this.todoRepository
        .createQueryBuilder("uuid")
        .select("uuid.uuid")
        .where("uuid.author = :author", {author: name})
        .andWhere("uuid.deleted = :deleted", {deleted: true});

    const results: TodolistEntity[] = await this.todoRepository
        .createQueryBuilder("all")
        .innerJoinAndSelect("(SELECT  max(_id) as id, uuid from \"todo-list\" where author = :author group by uuid)", "b", "b.id = all._id", { author: name })
        .where("all.author = :author and all.uuid NOT IN (" + userQb.getQuery() + ")", {author: name})
        .setParameters(userQb.getParameters())
        .getMany();

    return results;
  }
*/
}
