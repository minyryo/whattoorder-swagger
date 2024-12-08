import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty({ description: 'Unique identifier for the user.', example: 1 })
  user_id: number;

  @ApiProperty({ description: 'Username of the user.', example: 'john_doe' })
  username: string;

  @ApiProperty({ description: "User's email address.", example: 'john@example.com' })
  email: string;

  @ApiProperty({ description: 'Timestamp of user account creation.', example: '2023-12-01T12:34:56Z' })
  created_at: string;
}
