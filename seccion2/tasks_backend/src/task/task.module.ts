import { Module } from '@nestjs/common';
import { TaskController } from './task.controller.js';
import { DatabaseModule } from '../db/database.module.js';
import { TaskService } from './task.service.js';

@Module({
  imports: [DatabaseModule],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
