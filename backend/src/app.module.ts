import { Module } from '@nestjs/common'
import { HealthController } from './health/health.controller'

@Module({
  imports: [
    // Add feature modules here: AuthModule, UsersModule, PostsModule, ChatModule, ...
  ],
  controllers: [HealthController],
})
export class AppModule {}
