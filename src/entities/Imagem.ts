import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 } from 'uuid';
import { Orfanato } from './Orfanato';

@Entity('imagens')
export class Imagem {
    
    @PrimaryColumn()
    readonly id: string;

    @Column()
    path: string; 
    
    @ManyToOne(() => Orfanato, orfanato => orfanato.imagens)
    @JoinColumn({name: 'orfanato_id'})
    orfanato: Orfanato;

    constructor () {
        if(!this.id){
            this.id = v4()
        }
    }
}