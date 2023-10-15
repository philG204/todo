import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { TodoController } from './todo.controller';

@Module({
    imports: [ClientsModule.register([
        {
            name: 'TODO_PACKAGE',
            transport: Transport.GRPC,
            options: {
                package: 'user',
                protoPath: join(__dirname, 'todo/user.proto'),
                },
            },
        ]),
    ],
    controllers: [TodoController],
})
export class TodoModule {}
