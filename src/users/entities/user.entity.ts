import { ApiProperty } from '@nestjs/swagger';
import { Mensagem } from 'src/mensagem/entities/mensagem.entity';
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToMany } from 'typeorm';


@Entity('users')
export class User {

    @PrimaryGeneratedColumn("uuid")
    @ApiProperty({ description: 'ID único do usuário' })
    id: string

    @Column()
    @ApiProperty({ description: 'Nome do usuário' })
    name:string

    @Column({unique:true})
    @ApiProperty({ description: 'Email do usuário' })
    email: string;
    
    @Column()
    @ApiProperty({ description: 'Senha do usuário' })
    password: string;

    @OneToMany(()=>Mensagem,(mens)=> mens.user)
    @JoinColumn()
    public mensagem: Mensagem[]

    constructor(
        name:string,
        email:string,
        password:string,
        id?: string,
    ){
        this.name = name;
        this.email = email;
        this.password = password;
        if (!id) {
            this.id = id;
          }
    }
}

