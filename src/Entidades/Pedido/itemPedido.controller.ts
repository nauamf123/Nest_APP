import { Controller, Body, Post, Get, Param, Delete, Put } from "@nestjs/common";
import { ItemPedidoService } from "./itemPedido.service";
import { PedidoEntity } from "./pedido.entity";
import { ItemEntity } from "./item.entity";



@Controller("itemPedido")
export class ItemPedidoController { 


    constructor(private  itemPedidoService: ItemPedidoService) { }
    @Get()
    showAllproduto(){
     return this.itemPedidoService.readAll();
    }

    @Post()
    createProduto(@Body() PedidoEntity,@Body() ItemEntity){
      this.itemPedidoService.create(PedidoEntity);
      this.itemPedidoService.create(ItemEntity);
    }

    @Get('id:')
    readProduto(@Param() id: number){
     return this.itemPedidoService.read(id);
     
    }

    @Put('id:')
    upadateProduto(@Param('id') id: number, @Body() pedido: PedidoEntity, @Body() item: ItemEntity){
       this.itemPedidoService.update(id, pedido, item);
       
    }

    @Delete('id:')
    destroyProduto(@Param('id') id: number){
        return this.itemPedidoService.destroy(id);
    }
    

}
