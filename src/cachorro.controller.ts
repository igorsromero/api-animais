import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { Cachorro } from './cachorro.entity';
import { CachorrosService } from './cachorro.service';

@Controller('cachorros')
export class CachorrosController {
    constructor(private cachorrosService: CachorrosService) { }

    @Get()
    async findAll(): Promise<Cachorro[]> {
        return await this.cachorrosService.findAll();
    }

    @Get(':id')
    async findOne(@Param() params): Promise<Cachorro> {
        return await this.cachorrosService.findOne(params.id);
    }

    @Post()
    async create(@Body() cachorro: Cachorro) {
        return this.cachorrosService.create(cachorro);
    }

    @Delete(':id')
    async delete(@Param() params) {
        this.cachorrosService.delete(params.id);
    }
}
