import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo usuário' }) 
  @ApiResponse({ status: 201, description: 'O usuário foi criado com sucesso.', type: User }) 
  @ApiResponse({ status: 400, description: 'Dados inválidos.' }) 
  create(@Body() createUserDto: CreateUserDto) {
  const user = new User(
    createUserDto.name,
    createUserDto.email,
    createUserDto.password
    
  )
    return this.usersService.create(user);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os usuários' })
  @ApiResponse({ status: 200, description: 'Lista de usuários retornada com sucesso.', type: [User] })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Lista um usuário' })
  @ApiResponse({ status: 200, description: 'Usuário retornado com sucesso.', type: [User] })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um usuário' })
  @ApiResponse({ status: 200, description: 'Usuário atualizado com sucesso.', type: [User] })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um usuario' })
  @ApiResponse({ status: 200, description: 'Usuário removido com sucesso.', type: [User] })
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
