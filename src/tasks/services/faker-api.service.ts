import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Status } from '../enums/status.enum';
import { ITask } from '../interfaces/task.interface';

@Injectable()
export class FakerApiService {
  private readonly FAKER_API_URL: string = 'https://lorem-faker.vercel.app/api';

  constructor(private readonly httpService: HttpService) {}

  // TODO: Check why I don't have the AxiosReponse Class available
  fetch(quantity: number = 3): Promise<any> {
    return this.httpService.axiosRef.get(this.FAKER_API_URL, {
      params: {
        quantity,
      },
    });
  }

  processTitles(titles: Array<string>): Array<ITask> {
    return titles.map((title) => ({
      uuid: uuidv4(),
      title,
      status: Status.pending,
    }));
  }
}
