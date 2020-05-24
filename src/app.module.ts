import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoEntity } from './Entidades/produto/produto.entity';
import { ProdutoController } from './Entidades/produto/produto.controller';
import { ProdutoService } from './Entidades/produto/produto.service';
import { ClienteEntity } from './Entidades/Cliente/cliente.entity';
import { ClienteController } from './Entidades/Cliente/cliente.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 50558,
      username: 'nauamf12',
      password: 'jabulani',
      database: 'nest-produto',
      entities: [
        ProdutoEntity,
        ClienteEntity
      ],
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([
      ProdutoEntity,
      ClienteEntity
    ])
  ],
  controllers: [ProdutoController,ClienteController],
  providers: [ProdutoService,ClienteController],
  
})
export class AppModule {}
