import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MensagemService } from './mensagem.service';
import { CreateMensagemDto } from './dto/create-mensagem.dto';
import { UpdateMensagemDto } from './dto/update-mensagem.dto';
import { Mensagem } from './entities/mensagem.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('mensagem')
@Controller('mensagem')
export class MensagemController {
  constructor(private readonly mensagemService: MensagemService) { }

  @Post()
  @ApiOperation({ summary: 'Cria um novo usuário' }) 
  @ApiResponse({ status: 201, description: 'O usuário foi criado com sucesso.', type: Mensagem }) 
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  create(@Body() createMensagemDto: CreateMensagemDto) {
    return this.mensagemService.create(createMensagemDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todas as Postagens' }) 
  @ApiResponse({ status: 200, description: 'Lista de Postagens retornada com sucesso.', type: [Mensagem] })
  findAll() {
    return this.mensagemService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna uma Postagem' })
  @ApiResponse({ status: 200, description: 'Postagem retornada com sucesso.', type: [Mensagem] })
  findOne(@Param('id') id: string) {
    return this.mensagemService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza a postagem' })
  @ApiResponse({ status: 200, description: 'Postagem atualizada com sucesso.', type: [Mensagem] })
  update(@Param('id') id: string, @Body() updateMensagemDto: UpdateMensagemDto) {
    return this.mensagemService.update(id, updateMensagemDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove uma Postagem' })
  @ApiResponse({ status: 200, description: 'Postagem removida com sucesso.', type: [Mensagem] })
  remove(@Param('id') id: string) {
    return this.mensagemService.remove(id);
  }
}
