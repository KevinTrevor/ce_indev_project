import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  const config = new DocumentBuilder()
    .setTitle('In.dev API')
    .setDescription(
      'In.dev es un sitio de contratación de servicio de programadores a nivel regional.',
    )
    .setVersion('0.1')
    .addTag('customers')
    .addTag('developers')
    .addTag('recruiters')
    .addTag('bills')
    .addTag('chats')
    .addTag('messages')
    .addTag('details')
    .addTag('services')
    .addTag('packages')
    .addTag('programming_languages')
    .addTag('institutions')
    .addTag('categories')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);
  app.enableCors();
  await app.listen(port);
}
bootstrap();
