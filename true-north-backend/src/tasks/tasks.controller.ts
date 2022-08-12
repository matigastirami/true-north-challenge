import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Put,
  Query,
  Logger
} from '@nestjs/common';
import { FakerApiService, ITask } from './services/faker-api.service';
import { validate as uuidValidate } from 'uuid';

@Controller('tasks')
export class TasksController {
  constructor(
    private readonly fakerApiService: FakerApiService,
  ) {}

  private readonly logger = new Logger(TasksController.name);

  @Get()
  async fetchTitlesAndUpsert(@Query('quantity') quantity?: number): Promise<ITask[]> {
    try {
      const fetchTasksResponse = await this.fakerApiService.fetch(quantity);

      if (
        !fetchTasksResponse ||
        ![200, 201].includes(fetchTasksResponse.status)
      ) {

        this.logger.error('Could not fetch faker API');

        throw new HttpException(
          'Could not fetch faker API',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }

      this.logger.log('Task titles successfully fetched from Faker API');

      const tasks = this.fakerApiService.processTitles(fetchTasksResponse.data);

      return tasks;

    } catch (err) {
      throw err;
    }
  }

  @Put(':uuid')
  async completeTask(@Param('uuid') uuid: string) {

    if(!uuidValidate(uuid)) {
      throw new HttpException(
        'Invalid UUID',
        HttpStatus.BAD_REQUEST,
      );
    }

    const msg = `Task status for uuid ${uuid} sucessfully updated`;
    this.logger.log(msg);
    return {
        msg
    }
  }
}
