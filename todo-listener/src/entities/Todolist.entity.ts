import {Column, Entity} from 'typeorm'
import { TodolistAbstractEntity } from './Todolist.abstract-entity'

@Entity('todo-list')
export class TodolistEntity  extends TodolistAbstractEntity{

    @Column()
    author: string;

    @Column()
    task: string;

    @Column({default:false})
    done: boolean;

}
