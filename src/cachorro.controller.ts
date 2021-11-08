import { Controller, Get, Post, Body } from '@nestjs/common';
import { Cachorro } from './cachorro.entity';
import { CachorrosService } from './cachorro.service';

@Controller('cachorros')
export class CachorrosController {
    constructor(private cachorrosService: CachorrosService) { }

    @Get()
    async findAll(): Promise<Cachorro[]> {
        console.log('Listar');
        return await this.cachorrosService.findAll();
    }

    @Post()
    async create(@Body() cachorro: Cachorro) {
        return this.cachorrosService.create(cachorro);
    }
}
