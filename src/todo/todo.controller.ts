import { Controller, Get, Header, HttpCode, HttpStatus, Param, UseGuards } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from 'src/entity/todo.entity';
import { AuthGuard } from 'src/auth/auth/auth.guard';

@Controller('todo')
export class TodoController {

    constructor(private readonly todoService: TodoService){}

    @Get(':username')
    @HttpCode(HttpStatus.OK)
    @Header('Content-Type', 'application/json')
    @Header('Access-Control-Allow-Origin', process.env.ALLOWED_DOMAIN)
    @UseGuards(AuthGuard)
    async getAllTodos(@Param() param): Promise<Todo[]>{
        return this.todoService.findAllByUser(param.userId);
    }
}
