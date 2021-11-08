Projeto desenvolvido como forma de estudo de NestJs com TypeORM.

1 - Iniciando um projeto Nest:
```
nest new project-name
cd project-name
nest run start ou nest run start:dev
```

2 - Excluindo arquivos que não serão utilizado no momento:
```
pasta test
src/app.controller.spec.ts
```

3 - Criar o controller Cachorro:
```
import {Controller} from '@nestjs/common';

@Controller('cachorros')
export class CachorrosController { }
```

4 - Adicionar CachorrosController no controller de app.module.ts
```
controllers: [AppController, CachorrosController]
```

5 - Instalar o TypeORM:
```
npm install --save @nestjs/typeorm typeorm mysql2
```

6 - Adicionar o TypeOrmModule no Imports do AppModule:
```
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [],
      synchronize: true,
    }),
  ],
```

7 - Criar a tabela Animais no banco de dados:
```
CREATE DATABASE Animais;
USE Animais;
```

8 - Criar a entidade Cachorro:
```
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cachorro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  raca: string;
}
```

9 - Adicionar Cachorro a Entidade do TypeORM no AppModule:
```
entities: [Cachorro],
```

10 - Criar Cachorro Service:
```
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cachorro } from './cachorro.entity';

@Injectable()
export class CachorrosService {
  constructor(
    @InjectRepository(Cachorro)
    private CachorrosRepository: Repository<Cachorro>,
  ) {}

  findAll(): Promise<Cachorro[]> {
    return this.CachorrosRepository.find();
  }
}
```

11 - Adicionar CachorrosService no AppModule:
```
  providers: [AppService, CachorrosService],
```

12 - Adicionar forFeature no Import do AppModule:
```
TypeOrmModule.forFeature([Cachorro]),
```