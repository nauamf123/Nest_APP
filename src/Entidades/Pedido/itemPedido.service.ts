import { ItemEntity } from "./item.entity";
import { PedidoEntity } from "./pedido.entity";
import { Repository } from "typeorm/repository/Repository";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { async } from "rxjs/internal/scheduler/async";
import { read } from "fs";



@Injectable()
export class ItemPedidoService {
    
    itemRepository: any;
    itemPedidoRepository: any;
    showAll() {
        throw new Error("Method not implemented.");
    }
  constructor(@InjectRepository(PedidoEntity)
   private pedidoRepository: Repository<PedidoEntity>,  itemRepository : Repository<ItemEntity>){}
      
  
   async create({ pedido, item }: { pedido: PedidoEntity; item: ItemEntity; }){
     this.pedidoRepository.create(pedido);
     this.itemRepository.create(item);
     this.itemRepository.save(item);
     this.pedidoRepository.save(pedido);
     return this;

     }
   async read(id:number){
     await this.pedidoRepository.findOne({where:{id}});
     await this.itemRepository.findOne({where:{id}});
     return this
   

}
   async update(id:number, pedido, item){
    this.pedidoRepository.update({id},pedido);
    this.itemRepository.update({id},item);
    await this.pedidoRepository.findOne({id});
    await this.itemRepository.findOne({id});
    return this
}
async readAll() {
  this.itemRepository.find();
  this.pedidoRepository.find();
  return this;
}
async destroy(id: number){
    await this.itemRepository.delete({id});
    await this.pedidoRepository.delete({id});
     return {deleted: true};
}




}

