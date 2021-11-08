import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cachorro } from './cachorro.entity';

@Injectable()
export class CachorrosService {
  constructor(
    @InjectRepository(Cachorro)
    private CachorrosRepository: Repository<Cachorro>,
  ) { }

  async findAll(): Promise<Cachorro[]> {
    return this.CachorrosRepository.find();
  }

  async create(cachorro: Cachorro) {
    return this.CachorrosRepository.save(cachorro);
  }
}
