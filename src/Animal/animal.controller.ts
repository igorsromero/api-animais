/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { Animal } from './animal.entity';
import { AnimaisService } from './animal.service';

@Controller('animais')
export class AnimaisController {
    constructor(private animaisService: AnimaisService) { }

    @Get()
    async findAll() {
        return await this.animaisService.findAll();
    }

    @Get(':id')
    async findOne(@Param() params) {
        const animal = await this.animaisService.findOne(params.id);
        const newAnimal = { id: animal.id, nome: animal.nome, raca: animal.raca.raca, tipo: animal.tipo.tipo };
        return newAnimal;
    }

    @Post()
    async create(@Body() animal: Animal) {
        return this.animaisService.create(animal);
    }

    @Delete(':id')
    async delete(@Param() params) {
        this.animaisService.delete(params.id);
    }

    @Put(':id')
    async update(@Param() params, @Body() newAnimal: Animal) {
        return this.animaisService.update(params.id, newAnimal);
    }
}
