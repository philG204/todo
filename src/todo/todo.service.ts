import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from '../entity/todo.entity';
import { Client, ClientGrpc, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { User, UserByName } from 'src/protos/user_pb.js';

@Injectable()
export class TodoService implements OnModuleInit {
    @Client({
        transport: Transport.GRPC,
        options: {
          package: 'user',
          protoPath: join(__dirname, 'protos/user.proto'),
          url: 'user-app:50051',
        },
      })
    private readonly client: ClientGrpc;
    
    private userService;
    
    constructor(@InjectRepository(Todo) private readonly todoRepository: Repository<Todo>){}
    
    onModuleInit() {
      this.userService = this.client.getService<UserServiceService>('UserServiceService');
    }

    async getUser(userId: string): Promise<any> {
      const userService = this.client.
    }

    async findAllByUser(user: string): Promise<Todo[]>{
        return this.todoRepository.query("SELECT * FROM Todo WHERE user = $1", [user]);
    }
}
