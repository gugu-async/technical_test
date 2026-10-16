import { IsInt, IsString, IsUUID, Length, Max, Min } from 'class-validator';
import { MESSAGES_ERROR } from '../../constants/messages-error.constants.js';

export class CreateTaskDto {
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
