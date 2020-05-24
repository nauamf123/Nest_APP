import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProdutoEntity } from "./produto.entity";
import { Repository } from "typeorm/repository/Repository";
import { Connection } from "typeorm/connection/Connection";


@Injectable()
export class ProdutoService {
    showAll() {
        throw new Error("Method not implemented.");
    }
  constructor(@InjectRepository(ProdutoEntity)
   private produtoRepository: Repository<ProdutoEntity>){}
      
  
   async create(produto : ProdutoEntity){
     this.produtoRepository.create(produto);
     return this.produtoRepository.save(produto);
   }
  
   async read(id:number){
       return await this.produtoRepository.findOne({where:{id}});

   }
   async update(id:number, produto){
       this.produtoRepository.update({id},produto);
       return await this.produtoRepository.findOne({id});
   }
   async readAll() {
    return this.produtoRepository.find();
}
   async destroy(id: number){
       await this.produtoRepository.delete({id});
        return {deleted: true};
   }
}