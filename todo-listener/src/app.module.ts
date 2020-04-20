import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TodolistEntity } from './entities/Todolist.entity';
import 'dotenv/config'

const url = 'mqtt://'+process.env.TRANSPORT_HOST+':'+process.env.TRANSPORT_PORT;

@Module({
  imports: [
      TodolistEntity,
      TypeOrmModule.forRoot({
        "type": "postgres",
        "host": process.env.DB_HOST,
        "port": Number(process.env.DB_PORT),
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_DATABASE_NAME,
        "entities": ["dist/**/*.entity{.ts,.js}"],
        "synchronize": true
      }),
      TypeOrmModule.forFeature([TodolistEntity]),
      ClientsModule.register([
        {
          name: 'COMMAND_SERVICE',
          transport: Transport.MQTT,
          options: {
            url: url
          }
        }
      ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
