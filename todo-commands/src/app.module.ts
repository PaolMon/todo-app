import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import 'dotenv/config'

const url = 'mqtt://'+process.env.TRANSPORT_HOST+':'+process.env.TRANSPORT_PORT;

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'COMMAND_SERVICE',
        transport: Transport.MQTT,
        options: {
          url: url
        }
      },
    ]),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
