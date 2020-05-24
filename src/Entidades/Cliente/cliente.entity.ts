import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cliente')
export class ClienteEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({name: 'Maria Eduarda', type:'varchar', length:100})
    name:string;
    @Column({name: '014.229.561-42', type:'varchar', length:40})
    cpf:string;
    @Column({name: 'Rua São Paulo - 239 - Centro',  type:'varchar', length:40})
    address:string;
}