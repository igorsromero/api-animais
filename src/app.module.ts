/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimaisController } from './Animal/animal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Animal } from './Animal/animal.entity';
import { AnimaisService } from './Animal/animal.service';
import { TiposService } from './Tipo/tipo.service';
import { Tipo } from './Tipo/tipo.entity';
import { TiposController } from './Tipo/tipo.controller';
import { Raca } from './Raca/raca.entity';
import { RacasController } from './Raca/raca.controller';
import { RacasService } from './Raca/raca.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'animais',
      entities: [Animal, Tipo, Raca],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Animal, Tipo, Raca]),
  ],
  controllers: [AppController, AnimaisController, TiposController, RacasController],
  providers: [AppService, AnimaisService, TiposService, RacasService],
})
export class AppModule { }

