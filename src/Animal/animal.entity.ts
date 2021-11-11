import { Raca } from 'src/Raca/raca.entity';
import { Tipo } from 'src/Tipo/tipo.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Animal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @OneToOne(() => Raca)
  @JoinColumn()
  raca: Raca;

  @OneToOne(() => Tipo)
  @JoinColumn()
  tipo: Tipo;
}
