import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class AuthDto {
    @ApiProperty({
        example: 'admin@admin.com', 
      })
    @IsEmail()
    email: string;
}