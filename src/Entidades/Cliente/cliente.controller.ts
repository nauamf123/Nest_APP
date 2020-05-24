import { Controller, Body, Post, Get, Param, Delete, Put } from "@nestjs/common";
import { ClienteService } from "./cliente.service";
import { ClienteEntity } from "./cliente.entity";


@Controller("cliente")
export class ClienteController { 


    constructor(private  clienteService: ClienteService) { }
    @Get()
    showAllproduto(){
     return this.clienteService.readAll();
    }

    @Post()
    createProduto(@Body() ClienteEntity){
     return this.clienteService.create(ClienteEntity);
    }

    @Get('id:')
    readProduto(@Param() id: number){
     return this.clienteService.read(id);
     
    }

    @Put('id:')
    upadateProduto(@Param('id') id: number, @Body() cliente: ClienteEntity){
        return this.clienteService.update(id, cliente);
    }

    @Delete('id:')
    destroyProduto(@Param('id') id: number){
        return this.clienteService.destroy(id);
    }

}

   