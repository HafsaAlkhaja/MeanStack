import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import * as dotenv from 'dotenv';

dotenv.config(); 

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.APP_SECRET, 
      signOptions: { expiresIn: '8h' }, 
    }),
    UserModule,
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
