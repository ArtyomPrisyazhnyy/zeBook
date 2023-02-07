import { UserDto } from 'src/users/dto/user.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@ApiTags("авторизация")
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @Post("/login")
    login(@Body() userDto: UserDto){
        return this.authService.login(userDto);
    }

    @Post("/registration")
    registration(@Body() userDto: UserDto){
        return this.authService.registration(userDto);
    }
}

