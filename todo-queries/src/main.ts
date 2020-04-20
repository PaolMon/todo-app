import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config'

async function bootstrap() {
  const port = process.env.SERVER_QUERIES_PORT;
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
bootstrap();
