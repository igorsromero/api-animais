/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Raca {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    raca: string;
}
