import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { UpdateTaskDto } from './dto/update-task.dto.js';
import { Pool } from 'pg';
import { MESSAGES_ERROR } from '../constants/messages-error.constants.js';

@Injectable()
export class TaskService {
  constructor(@Inject('DATABASE_POOL') private readonly db: Pool) {}

  async create(createTaskDto: CreateTaskDto) {
    try {
      const query = 'INSERT INTO TASKS VALUES(GEN_RANDOM_UUID(),$1, $2, $3)';
      const result = await this.db.query(query, [
        createTaskDto.title,
        createTaskDto.description,
        createTaskDto.completed,
      ]);

      if (result.rowCount == 0) {
        throw new NotFoundException(MESSAGES_ERROR.DATA.DEFAULT);
      }
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException(MESSAGES_ERROR.INTERNAL_SERVER);
      }
    }
  }

  async findAll() {
    try {
      const query = 'SELECT *FROM TASKS';
      const result = await this.db.query(query);
      return result.rows;
    } catch (error) {
      throw new NotFoundException(MESSAGES_ERROR.DATA.DEFAULT);
    }
  }

  async findOne(id: string) {
    try {
      const query = 'SELECT *FROM TASKS WHERE ID= $1';
      const result = await this.db.query(query, [id]);
      return result.rows;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException(MESSAGES_ERROR.INTERNAL_SERVER);
      }
    }
  }

  async update(updateTaskDto: UpdateTaskDto) {
    try {
      const query =
        'UPDATE TASKS SET TITLE= $2, DESCRIPTION= $3, COMPLETED= $4 WHERE ID= $1';
      const result = await this.db.query(query, [
        updateTaskDto.id,
        updateTaskDto.title,
        updateTaskDto.description,
        updateTaskDto.completed,
      ]);

      if (result.rowCount == 0) {
        throw new NotFoundException('Algo salio mal Vuelva a intentar!');
      }
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException(MESSAGES_ERROR.INTERNAL_SERVER);
      }
    }
  }

  async remove(id: string) {
    try {
      const query = 'DELETE FROM TASKS WHERE ID= $1;';
      const result = await this.db.query(query, [id]);

      if (result.rowCount == 0) {
        throw new NotFoundException(MESSAGES_ERROR.DATA.DEFAULT);
      }
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      } else {
        throw new InternalServerErrorException(MESSAGES_ERROR.INTERNAL_SERVER);
      }
    }
  }
}
