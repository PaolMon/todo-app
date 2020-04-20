import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm'


@Entity('todo-list')
export class TodolistEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    _id: number;

    @Column()
    uuid: string;

    @Column()
    deleted: boolean;

    @Column()
    author: string;

    @Column()
    task: string;

    @Column()
    done: boolean;

}