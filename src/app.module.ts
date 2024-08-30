import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { MensagemModule } from './mensagem/mensagem.module';
import { Mensagem } from './mensagem/entities/mensagem.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    username: 'postgres',
    password: 'root',
    entities: [User,Mensagem],
    synchronize: true,
  }),
    UsersModule,
    MensagemModule, 
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
