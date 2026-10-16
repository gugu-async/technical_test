import { IsUUID } from 'class-validator';

export class IdDto {
  @IsUUID(4, { each: true, message: 'Formato invalido' })
  id: string;
}