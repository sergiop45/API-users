import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategies/local.strategy';
import { jwtStrategy } from './strategies/jwt.stategy';

@Module({
  imports: [ConfigModule.forRoot(),
            UsersModule,
            PassportModule,
            JwtModule.register({
              privateKey: process.env.SECRET_KEY,
              signOptions: {expiresIn: '50s'}
            })
          ],
  providers: [AuthService, LocalStrategy, jwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
