/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tipo } from './tipo.entity';

@Injectable()
export class TiposService {
    constructor(
        @InjectRepository(Tipo)
        private TiposRepository: Repository<Tipo>,
    ) { }

    async findAll(): Promise<Tipo[]> {
        return this.TiposRepository.find();
    }

    async findOne(id: number): Promise<Tipo> {
        return this.TiposRepository.findOne(id);
    }

    async delete(id: number): Promise<void> {
        await this.TiposRepository.delete(id);
    }

    async create(tipo: Tipo) {
        return this.TiposRepository.save(tipo);
    }

    async update(id: number, newTipo: Tipo) {
        const tipoAtual = await this.findOne(Number(id));
        console.log(typeof (Number(id)))
        console.log(tipoAtual.tipo);
        console.log(newTipo);
        return await this.TiposRepository.save({ ...tipoAtual, ...newTipo });
    }
}
