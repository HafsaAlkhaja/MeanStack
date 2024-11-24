import { Controller, Post, Body, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(
    @Body() body: { name: string; email: string; password: string },
  ) {
    try {
      const { name, email, password } = body;
      const result = await this.authService.signup(name, email, password);

      return {
        statusCode: HttpStatus.CREATED,
        message: 'Signup successful',
        data: result,
      };
    } catch (error) {
      console.error('Signup Error:', error);
      

      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        status: 'Error',
        msg: 'Signup failed',
        error: errorMessage,
      };
    }
  }

  @Post('login')
  async login(
    @Body() body: { email: string; password: string },
  ) {
    try {
      const { email, password } = body;
      const result = await this.authService.login(email, password);

      return {
        statusCode: HttpStatus.OK,
        message: 'Login successful',
        data: result,
      };
    } catch (error) {
      console.error('Login Error:', error);

    
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      
      return {
        statusCode: HttpStatus.UNAUTHORIZED,
        status: 'Error',
        msg: 'Invalid credentials',
        error: errorMessage,
      };
    }
  }
}
