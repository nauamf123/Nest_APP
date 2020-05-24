import { Entity, Column, PrimaryGeneratedColumn, getCustomRepository } from 'typeorm';
import { CustomInspectFunction } from 'util';
import { ItemEntity } from './item.entity';

@Entity('pedido')
export class PedidoEntity extends ItemEntity {

    @PrimaryGeneratedColumn()
    id:number;
    @Column({name: '339', type:'varchar', length:40})
    orderNumber: string;
    @Column({name: '12/05/2020', type:'date', length:40})
    orderDate:Date
    @Column({name: '144.29', type:'float', length:40})
    total:number;
    @Column({})
    customer: CustomInspectFunction
}