import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { FakerApiService } from './faker-api.service';

describe('FakerApiService', () => {
  let service: FakerApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FakerApiService],
      imports: [HttpModule],
    }).compile();

    service = module.get<FakerApiService>(FakerApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should fetch an array of strings from faker api', async () => {
    const result = await service.fetch(5);

    expect(result).toBeDefined();

    expect(result).toHaveProperty('status');
    expect(result.status).toBe(200);

    expect(result).toHaveProperty('data');
    expect(Array.isArray(result.data)).toBeTruthy();
    expect(result.data).toHaveLength(5);
  });

  it('should should convert an array of strings to an array of tasks', async () => {
    const result = service.processTitles(['test1', 'test2']);

    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBeTruthy();

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
});
