import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';


export class CreateUserDto {

    
    @ApiProperty({ description: 'Nome do usuário' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ description: 'Email do usuário' })
    @IsString()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ description: 'Senha do usuário' })
    @IsString()
    @IsNotEmpty()
    password: string;
}


