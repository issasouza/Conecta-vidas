import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Mensagem {

    @PrimaryGeneratedColumn("uuid")
    @ApiProperty({ description: 'ID único da postagem' })
    id: string

    @Column()
    @ApiProperty({ description: 'Titulo da postagem' })
    titulo: string;

    @Column()
    @ApiProperty({ description: 'Conteudo da postagem' })
    Conteudo: string;

    @Column('date')
    @ApiProperty({ description: 'data da postagem' })
    data: Date;

    @OneToOne(() => User)
    @JoinColumn({ name: 'name_id' })
    @ApiProperty({ description: 'Usuario da postagem' })
    @ApiProperty({ type: () => User })
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
