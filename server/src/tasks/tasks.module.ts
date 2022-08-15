import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { FakerApiService } from './services/faker-api.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [TasksController],
  providers: [FakerApiService],
  imports: [HttpModule, ConfigModule]
})
export class TasksModule {}
