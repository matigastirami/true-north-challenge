import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v4 as uuidv4 } from 'uuid';
import { Status } from '../enums/status.enum';
import { ITask } from '../interfaces/task.interface';

@Injectable()
export class FakerApiService {
  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService,
  ) {}

  // TODO: Check why I don't have the AxiosReponse Class available
  fetch(quantity = 3): Promise<any> {
    return this.httpService.axiosRef.get(
      this.configService.get('FAKER_API_URL'),
      {
        params: {
          quantity,
        },
      },
    );
  }

  processTitles(titles: Array<string>): Array<ITask> {
    return titles.map((title) => ({
      uuid: uuidv4(),
      title,
      status: Status.pending,
    }));
  }
}
