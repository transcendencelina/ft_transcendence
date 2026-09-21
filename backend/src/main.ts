import 'reflect-metadata'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // Everything is served under /api so nginx can route /api -> backend.
  app.setGlobalPrefix('api')

  // Behind nginx: trust the proxy headers (real client IP, protocol).
  app.getHttpAdapter().getInstance().set('trust proxy', 1)

  const port = Number(process.env.PORT ?? 3000)
  await app.listen(port, '0.0.0.0')
}

bootstrap()
