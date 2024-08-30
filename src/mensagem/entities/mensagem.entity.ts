import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Mensagem {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    titulo: string;

    @Column()
    Conteudo: string;

    @Column('date')
    data: Date;

    @OneToOne(() => User)
    @JoinColumn({ name: 'name' })
    user: User;

    constructor(
        titulo: string,
        Conteudo: string,
        data: Date,
        user: User,
        id?: string

    ) {
        this.Conteudo = Conteudo
        this.data = data
        this.user = user
        this.titulo = titulo
        if (!id) {
            this.id = id;
        }
    }
}
