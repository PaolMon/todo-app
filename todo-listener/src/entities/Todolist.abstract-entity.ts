import {BaseEntity, Column, PrimaryGeneratedColumn} from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

export  abstract class TodolistAbstractEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    _id: number;

    @Column({default: uuidv4()})
    uuid: string;

    @Column({default:false})
    deleted: boolean;

}
