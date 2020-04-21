import {Column, Entity, BaseEntity, PrimaryGeneratedColumn} from 'typeorm'

@Entity('todo-list')
export class TodolistEntity  extends BaseEntity {

    @Column()
    author: string;

    @Column()
    task: string;

    @Column({default:false})
    done: boolean;

    @PrimaryGeneratedColumn()
    _id: number;

    @Column()
    uuid: string;

    @Column({default:false})
    deleted: boolean;

}
