import {Controller, Get, Post} from '@nestjs/common';
import { Cachorro } from './cachorro.entity';
import { CachorrosService } from './cachorro.service';

@Controller('cachorros')
export class CachorrosController {

    constructor(private cachorrosService: CachorrosService) { }

    @Get()
    async findAll(): Promise<Cachorro[]> {
        return this.cachorrosService.findAll();
    }

    @Post()
    async create(cachorro: Cachorro) {
        return this.cachorrosService.create(cachorro);
    }
}