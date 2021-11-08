import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cachorro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  raca: string;
}
