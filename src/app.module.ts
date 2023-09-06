import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo.controller';
import { TodoService } from './todo/todo.service';
import { join } from 'path';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { GrpcUserClientModule } from './grpc-user-client/grpc-user-client.module';

@Module({
  imports: [ClientsModule.register([
    {
      name: 'HERO_PACKAGE',
      transport: Transport.GRPC,
      options: {
        package: 'user',
        protoPath: join(__dirname, 'todo/user.proto'),
      },
    },
  ]), GrpcUserClientModule,],
  controllers: [AppController, TodoController],
  providers: [AppService, TodoService],
})
export class AppModule {}
