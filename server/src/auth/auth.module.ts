import { forwardRef, Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    forwardRef(() => UsersModule),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret || 'SECRET',
      signOptions: { expiresIn: '24h' },
    }),
  ],
  providers: [AuthService],
  exports: [
    AuthService,
    JwtModule
  ],
  controllers: [AuthController]
})
export class AuthModule {}
