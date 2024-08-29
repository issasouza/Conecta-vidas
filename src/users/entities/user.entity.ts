import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('users')
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name:string

    @Column()
    email: string;
    
    @Column()
    password: string;

    constructor(
        name:string,
        email:string,
        password:string,
    ){
        this.name = name;
        this.email = email;
        this.password = password;  
    }
}

