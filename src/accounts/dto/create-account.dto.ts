import { ApiProperty } from '@nestjs/swagger';
import { v4 as uuidv4 } from 'uuid';

export class CreateAccountDto {
  readonly id: string = uuidv4();

  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly description: string;

  @ApiProperty()
  readonly registrationDocument: string;

  readonly createdAt: Date = new Date();

  readonly updatedAt: Date = new Date();

  readonly inactivatedAt?: Date;

  readonly deletedAt?: Date;
}
