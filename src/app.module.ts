import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TasksModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
