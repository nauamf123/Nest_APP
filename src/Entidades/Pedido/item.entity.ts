import { Entity, Column, PrimaryGeneratedColumn, OrderByCondition } from 'typeorm';
import { ProdutoService } from '../produto/produto.service';
import { PedidoEntity } from './pedido.entity';

@Entity('item')
export class ItemEntity  {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    product:ProdutoService
    @Column()
    order: OrderByCondition
    @Column({name: '20', type:'number', length:40})
    quantity: number;
    @Column({name:'1.50', type:'float', length:40})
    unitValue : number;
    @Column({name: '30.00', type:'float', length:40})
    totalValue : number;

}