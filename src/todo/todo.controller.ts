import { Controller, Get, Header, HttpCode, HttpStatus, Inject, OnModuleInit, Param, UseGuards } from '@nestjs/common';
import { Todo } from 'src/entity/todo.entity';
import { AuthGuard } from 'src/auth/auth/auth.guard';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { UserById } from './interfaces/user-by-id.interface';
import { User } from './interfaces/user.interface';

interface UserGrpcService {
    FindUserByName(userId: any): Todo[] | PromiseLike<Todo[]>;
    findOne(data: UserById): Observable<User>;
    findMany(upstream: Observable<UserById>): Observable<User>;
}

@Controller('todo')
export class TodoController implements OnModuleInit {
    
    private todoService: UserGrpcService;

    constructor(@Inject('USER_PACKAGE') private readonly client: ClientGrpc){}

    onModuleInit() {
        this.todoService = this.client.getService<UserGrpcService>('UserGrpcService');
    }

    @Get(':username')
    @HttpCode(HttpStatus.OK)
    @Header('Content-Type', 'application/json')
    @Header('Access-Control-Allow-Origin', process.env.ALLOWED_DOMAIN)
    @UseGuards(AuthGuard)
    async getAllTodos(@Param() param): Promise<Todo[]>{
        return this.todoService.FindUserByName(param.userId);
    }
}
