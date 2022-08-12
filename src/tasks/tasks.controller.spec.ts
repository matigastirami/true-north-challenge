import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { FakerApiService } from './services/faker-api.service';
import { TasksController } from './tasks.controller';

describe('TasksController', () => {
  let controller: TasksController;
  let fakerApiService: FakerApiService;
  let httpModule: HttpModule;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [FakerApiService],
      imports: [HttpModule],
    }).compile();

    httpModule = module.get<HttpModule>(HttpModule);
    fakerApiService = module.get<FakerApiService>(FakerApiService);
    controller = module.get<TasksController>(TasksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return tasks list', async () => {
    const mockFakerApiResult = {
      status: 200,
      data: ['quidem pariatur sint', 'qui dolor fuga', 'ut dignissimos at'],
    };

    jest
      .spyOn(fakerApiService, 'fetch')
      .mockImplementationOnce(() => Promise.resolve(mockFakerApiResult));

    const result = await controller.fetchTitlesAndUpsert();

    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBeTruthy();
    expect(result.length).toBe(3);

    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          uuid: expect.any(String),
          title: expect.any(String),
          status: expect.any(String),
        }),
      ]),
    );
  });

  it('should fail on faker API error response', async () => {
    const mockFakerApiResult = {
      status: 500,
    };

    jest
      .spyOn(fakerApiService, 'fetch')
      .mockImplementationOnce(() => Promise.resolve(mockFakerApiResult));

    try {
      const result = await controller.fetchTitlesAndUpsert();
    } catch (error) {
      expect(error).toBeDefined();
      
      expect(error).toHaveProperty("status");
      expect(error.status).toBe(500);

      expect(error).toHaveProperty("message");
      expect(error.message).toBe('Could not fetch faker API');

      expect(error).toHaveProperty("name");
      expect(error.name).toBe('HttpException');

      expect(error).toHaveProperty("response");
      expect(error.response).toBe('Could not fetch faker API');
    }

    expect.assertions(9);
  });
});
