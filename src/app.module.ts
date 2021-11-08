import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CachorrosController } from './cachorro.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Cachorro } from './cachorro.entity';
import { CachorrosService } from './cachorro.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'animais',
      entities: [Cachorro],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Cachorro]),
  ],
  controllers: [AppController, CachorrosController],
  providers: [AppService, CachorrosService],
})
export class AppModule {}
