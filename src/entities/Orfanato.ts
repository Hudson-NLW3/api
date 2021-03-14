import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryColumn } from 'typeorm';
import { v4 } from 'uuid';
import { Imagem } from './Imagem';

@Entity('orfanatos')
export class Orfanato {
    
    @PrimaryColumn()
    readonly id: string;

    @Column()
    nome: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    sobre: string;

    @Column()
    instrucoes: string;

    @Column()
    horario: string;

    @Column()
    final_de_semana: boolean;

    @CreateDateColumn()
    created_at: Date;

    @OneToMany(
        () => Imagem, 
        imagem => imagem.orfanato, 
        {
            cascade: ['insert', 'update']
        }
    )
    @JoinColumn({ name: 'orfanato_id'})
    imagens: Imagem[];

    constructor () {
        if(!this.id){
            this.id = v4()
        }
    }
}