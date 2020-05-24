import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('produto')
export class ProdutoEntity {
  @PrimaryGeneratedColumn({name:'1'})
  id: number;


  @Column({name: '2270/2', type:"varchar", length: 100 })
  code: string;

  @Column({name: 'Cerveja Heineken 330 ML', type: "varchar", length: 100})
  name: string;

  @Column({name: '4.29',type: 'float', length:100})
  price:number;

  @Column({name: '20',type: 'number', length:100})
  stockQuantity:number;

  
}