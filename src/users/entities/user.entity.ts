import { Mensagem } from 'src/mensagem/entities/mensagem.entity';
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToMany } from 'typeorm';


@Entity('users')
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name:string

    @Column({unique:true})
    email: string;
    
    @Column()
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

