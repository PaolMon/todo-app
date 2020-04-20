import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import {Logger} from '@nestjs/common'
import 'dotenv/config'

const logger = new Logger('App Services Listener');

async function bootstrap() {

  const url = 'mqtt://'+process.env.TRANSPORT_HOST+':'+process.env.TRANSPORT_PORT;
  
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
      AppModule,
      {
        transport: Transport.MQTT,
          options: {
 //           host: process.env.TRANSPORT_HOST,
 //           port: Number(process.env.TRANSPORT_PORT)
              url: url
          },
      },
  );
  app.listen(() => logger.log('Microservice is listening on ' + process.env.TRANSPORT_PORT));
}
bootstrap();
