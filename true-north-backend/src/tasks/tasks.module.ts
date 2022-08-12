import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { FakerApiService } from './services/faker-api.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [TasksController],
  providers: [FakerApiService],
  imports: [HttpModule]
})
export class TasksModule {}
