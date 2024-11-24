import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport'; 
import { Strategy } from 'passport-jwt'; 
import { ExtractJwt } from 'passport-jwt';
import { AuthService } from './auth.service'; 

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), 
      secretOrKey: process.env.APP_SECRET, 
    });
  }

  // Validate the JWT token
  async validate(payload: any) {
    return this.authService.validateUser(payload);
  }
}
