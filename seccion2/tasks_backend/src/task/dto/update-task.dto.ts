import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto.js';
import {
  IsIn,
  IsInt,
  IsString,
  IsUUID,
  Length,
  Max,
  max,
  Min,
} from 'class-validator';
import { MESSAGES_ERROR } from '../../constants/messages-error.constants.js';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @IsUUID(4, { each: true, message: MESSAGES_ERROR.DTO_TASK.ID_UUID })
  @Length(1, 36, { message: MESSAGES_ERROR.DTO_TASK.ID_UUID_LENGTH })
  id: string;

  @IsString({ message: MESSAGES_ERROR.DTO_TASK.TITLE })
  @Length(1, 50, { message: MESSAGES_ERROR.DTO_TASK.TITLE_LENGTH })
  title: string;

  @IsString({ message: MESSAGES_ERROR.DTO_TASK.DESCRIPTION })
  @Length(2, 255, { message: MESSAGES_ERROR.DTO_TASK.DESCRIPTION_LENGTH })
  description: string;

  @IsInt({ message: MESSAGES_ERROR.DTO_TASK.COMPLETED })
  @Max(1, { message: MESSAGES_ERROR.DTO_TASK.COMPLETED_LENGTH })
  @Min(0)
  completed: number;
}
