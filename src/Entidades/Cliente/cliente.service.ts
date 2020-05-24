import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { Repository } from "typeorm/repository/Repository";
import { ClienteEntity } from "./cliente.entity";



@Injectable()
export class ClienteService {
    showAll() {
        throw new Error("Method not implemented.");
    }
  constructor(@InjectRepository(ClienteEntity)
   private clienteRepository: Repository<ClienteEntity>){}
      
  
   async create(cliente : ClienteEntity){
     this.clienteRepository.create(cliente);
     return this.clienteRepository.save(cliente);
   }
  
   async read(id:number){
       return await this.clienteRepository.findOne({where:{id}});

   }
   async update(id:number, cliente){
       this.clienteRepository.update({id},cliente);
       return await this.clienteRepository.findOne({id});
   }
   async readAll() {
    return this.clienteRepository.find();
}
   async destroy(id: number){
       await this.clienteRepository.delete({id});
        return {deleted: true};
   }
}