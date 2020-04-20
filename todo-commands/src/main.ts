import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import 'dotenv/config'

const logger = new Logger('App Services');
const port = process.env.SERVER_COMMAND_PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  logger.log('command-service listening on ' + port);
  await app.listen(port);
}
bootstrap();
