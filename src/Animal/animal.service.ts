/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Animal } from './animal.entity';

@Injectable()
export class AnimaisService {
  constructor(
    @InjectRepository(Animal)
    private AnimaisRepository: Repository<Animal>,
  ) { }

  async findAll(): Promise<Animal[]> {
    return this.AnimaisRepository.find();
  }

  async findOne(id: number): Promise<Animal> {
    return await this.AnimaisRepository.findOne(id, { relations: ['tipo', 'raca'] });
  }

  async create(animal: Animal) {
    return this.AnimaisRepository.save(animal);
  }

  async delete(id: number) {
    return this.AnimaisRepository.delete(id);
  }

  async update(id: number, newAnimal: Animal) {
    const animal = await this.AnimaisRepository.findOne(id);
    return await this.AnimaisRepository.save({ ...animal, ...newAnimal });
  }
}
