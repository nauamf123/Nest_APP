import { Controller, Body, Post, Get, Param, Delete, Put } from "@nestjs/common";
import { ProdutoService } from "./produto.service";
import { ProdutoEntity } from "./produto.entity";



@Controller("produto")
export class ProdutoController { 


    constructor(private  produtoService: ProdutoService) { }
    @Get()
    showAllproduto(){
     return this.produtoService.readAll();
    }

    @Post()
    createProduto(@Body() ProdutoEntity){
     return this.produtoService.create(ProdutoEntity);
    }

    @Get('id:')
    readProduto(@Param() id: number){
     return this.produtoService.read(id);
     
    }

    @Put('id:')
    upadateProduto(@Param('id') id: number, @Body() produto: ProdutoEntity){
        return this.produtoService.update(id, produto);
    }

    @Delete('id:')
    destroyProduto(@Param('id') id: number){
        return this.produtoService.destroy(id);
    }

}

   