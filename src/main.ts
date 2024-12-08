import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Create Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('WhatToOrder - AnGiHomNay API')
    .setDescription(
      `WhatToOrder - AnGiHomNay is a food delivery app focused on personalized restaurant and cuisine recommendations.`
    )
    .setVersion('1.0.1')
    .setTermsOfService('https://whattoorder.com/terms/')
    .setContact('Support', '', 'support@whattoorder.com')
    .setLicense('Apache 2.0', 'http://www.apache.org/licenses/LICENSE-2.0.html')
    .addServer('https://api.whattoorder.com/v1', 'Production API')
    .addServer(
      'https://app.swaggerhub.com/apis/HieuPhamThiHong/WhatToOrder/1.0.0',
      'SwaggerHub API Auto Mocking'
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document); // Serve Swagger at `/api-docs`

  await app.listen(8888);
}
bootstrap();
