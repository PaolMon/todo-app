import {Column, Entity, BaseEntity, PrimaryGeneratedColumn} from 'typeorm'

@Entity('todo-list')
export class TodolistEntity  extends BaseEntity {

//    @Column()
//    author: string;

    @PrimaryGeneratedColumn()
    _id: number;

    @Column()
    uuid: string;

    @Column()
    title: string;

    @Column({default:false})
    done: boolean;

    @Column()
    percentage: number;

    @Column({default:false})
    deleted: boolean;

}
