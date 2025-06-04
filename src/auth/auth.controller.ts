import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { ApiTags, ApiBody, ApiResponse } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiBody({ type: AuthDto })
  @ApiResponse({ status: 200, description: 'return JWT token' })
  @ApiResponse({ status: 404, description: 'User not found' })
  loginWithEmail(@Body() authDto: AuthDto) {
    return this.authService.loginWithEmail(authDto);
  }
}
