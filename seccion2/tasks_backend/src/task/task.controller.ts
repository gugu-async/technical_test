import { Controller, Get, Post, Body, Patch } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { UpdateTaskDto } from './dto/update-task.dto.js';
import { IdDto } from './dto/id.dto.js';
import { TaskService } from './task.service.js';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Post('/task')
  findOne(@Body() idDto: IdDto) {
    return this.taskService.findOne(idDto.id);
  }

  @Patch()
  update(@Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(updateTaskDto);
  }

  @Post('/dTask')
  remove(@Body() idDto: IdDto) {
    return this.taskService.remove(idDto.id);
  }
}
