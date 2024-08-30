import { Injectable } from '@nestjs/common';
import { CreateMensagemDto } from './dto/create-mensagem.dto';
import { UpdateMensagemDto } from './dto/update-mensagem.dto';
import { Mensagem } from './entities/mensagem.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MensagemService {

  constructor(
    @InjectRepository(Mensagem)
    private mensagemRepository : Repository<Mensagem>
  ){}

  create(createMensagemDto: CreateMensagemDto) {
    const newMensagem = this.mensagemRepository.create({
      titulo: createMensagemDto.titulo,
      Conteudo:createMensagemDto.conteudo,
      data:createMensagemDto.data,
      user: createMensagemDto.user
    })
    return this.mensagemRepository.save(newMensagem);
  }

  findAll() {
    return this.mensagemRepository.find();
  }

  findOne(id: string) {
    return this.mensagemRepository.findOneBy({id});
  }

  async update(id: string, updateMensagemDto: UpdateMensagemDto): Promise<Mensagem> {
    await this.mensagemRepository.update(id,updateMensagemDto)
    return this.mensagemRepository.findOneBy({id});
  }

  async remove(id: string): Promise<void>{
    await this.mensagemRepository.delete(id);
  }
}
