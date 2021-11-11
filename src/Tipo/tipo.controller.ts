/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { Tipo } from './tipo.entity';
import { TiposService } from './tipo.service';

@Controller('tipos')
export class TiposController {
    constructor(private tiposService: TiposService) { }

    @Get()
    async findAll(): Promise<Tipo[]> {
        return await this.tiposService.findAll();
    }

    @Get(':id')
    async findOne(@Param() params): Promise<Tipo> {
        return await this.tiposService.findOne(params.id);
    }

    @Post()
    async create(@Body() tipo: Tipo) {
        return this.tiposService.create(tipo);
    }

    @Delete(':id')
    async delete(@Param() params) {
        this.tiposService.delete(params.id);
    }

    @Put(':id')
    async update(@Param() params, @Body() newTipo: Tipo) {
        return this.tiposService.update(params.id, newTipo);
    }
}