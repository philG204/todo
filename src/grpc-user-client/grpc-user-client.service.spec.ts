import { Test, TestingModule } from '@nestjs/testing';
import { GrpcUserClientService } from './grpc-user-client.service';

describe('GrpcUserClientService', () => {
  let service: GrpcUserClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GrpcUserClientService],
    }).compile();

    service = module.get<GrpcUserClientService>(GrpcUserClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
