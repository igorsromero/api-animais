/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { Raca } from './raca.entity';
import { RacasService } from './raca.service';

@Controller('racas')
export class RacasController {
    constructor(private racasService: RacasService) { }

    @Get()
    async findAll(): Promise<Raca[]> {
        return await this.racasService.findAll();
    }

    @Get(':id')
    async findOne(@Param() params): Promise<Raca> {
        return await this.racasService.findOne(params.id);
    }

    @Post()
    async create(@Body() raca: Raca) {
        return this.racasService.create(raca);
    }

    @Delete(':id')
    async delete(@Param() params) {
        this.racasService.delete(params.id);
    }

    @Put(':id')
    async update(@Param() params, @Body() newRaca: Raca) {
        return this.racasService.update(params.id, newRaca);
    }
}