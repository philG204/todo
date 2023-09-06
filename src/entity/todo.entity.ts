import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('todo')
export class Todo{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('uuid')
    user: string;

    @Column('text')
    titel: string;

    @Column('text')
    description: string;

    @Column('text')
    status: string;

}