import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { User } from "src/users/entities/user.entity";

export class CreateMensagemDto {

    @ApiProperty({ description: 'Titulo da Puplicação' })
    @IsString()
    titulo:string;

    @ApiProperty({ description: 'conteudo da Puplicação' })
    @IsString()
    conteudo:string;

    @ApiProperty({ description: 'data da Puplicação' })
    @IsString()
    data:Date;

    @ApiProperty({ description: 'Usuário associado à publicação' })
    user:User;
}
