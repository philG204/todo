import { Module } from '@nestjs/common';
import { GrpcUserClientService } from './grpc-user-client.service';

@Module({
  providers: [GrpcUserClientService]
})
export class GrpcUserClientModule {}
