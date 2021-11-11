/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Raca } from './raca.entity';

@Injectable()
export class RacasService {
    constructor(
        @InjectRepository(Raca)
        private RacasRepository: Repository<Raca>,
    ) { }

    async findAll(): Promise<Raca[]> {
        return this.RacasRepository.find();
    }

    async findOne(id: number): Promise<Raca> {
        return this.RacasRepository.findOne(id);
    }

    async delete(id: number): Promise<void> {
        await this.RacasRepository.delete(id);
    }

    async create(raca: Raca) {
        return this.RacasRepository.save(raca);
    }

    async update(id: number, newRaca: Raca) {
        const raca = await this.RacasRepository.findOne(id);
        return await this.RacasRepository.save({ ...raca, ...newRaca });
    }
}
