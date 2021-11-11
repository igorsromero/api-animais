/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tipo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tipo: string;
}
