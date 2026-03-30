import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { ValidationPipe } from '@nestjs/common';
import { logger } from './common/middlewares/logger.middleware';
import { UserIdGuard } from '@/user/guards/user-id.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.useGlobalGuards(new UserIdGuard(app.get(Reflector)));

  app.use(logger);

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
