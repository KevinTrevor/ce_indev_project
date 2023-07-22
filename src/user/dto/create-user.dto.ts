import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    type: String,
    minimum: 3,
  })
  name: string;

  @ApiProperty({
    type: String,
    minimum: 3,
  })
  lastname: string;

  @ApiProperty({
    type: String,
    minimum: 8,
    required: true,
  })
  username: string;

  @ApiProperty({
    type: String,
    minimum: 8,
    maximum: 16,
    required: true,
  })
  password: string;

  @ApiProperty({
    type: String,
    minimum: 8,
    required: true,
  })
  email: string;

  @ApiProperty({
    type: Date,
  })
  createdAt: Date;
}
